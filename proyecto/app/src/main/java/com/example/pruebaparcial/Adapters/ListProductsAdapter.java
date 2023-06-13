package com.example.pruebaparcial.Adapters;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.pruebaparcial.EditProduct;
import com.example.pruebaparcial.Home;
import com.example.pruebaparcial.ListProductsRecycler;
import com.example.pruebaparcial.Model.Product;
import com.example.pruebaparcial.R;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.ArrayList;

public class ListProductsAdapter extends RecyclerView.Adapter<ListProductsAdapter.MyViewHolder> {
    private Context context;
    private ArrayList<Product> productsList;
    private ArrayList<Product> list_personalized;
    private FirebaseFirestore mfirestore;

    public ListProductsAdapter(Context context, ArrayList<Product> productsList) {
        this.context = context;
        this.productsList = productsList;
        list_personalized = new ArrayList<>();
        mfirestore = FirebaseFirestore.getInstance();
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.resource_cards, parent, false);
        return new MyViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        Product product = productsList.get(position);
        holder.id.setText(String.valueOf(" "+product.getId()));
        holder.name.setText(String.valueOf(" "+product.getName()));
        holder.city.setText(String.valueOf(" "+product.getCity()));
        holder.country.setText(String.valueOf(" "+product.getCountry()));

    }

    @Override
    public int getItemCount() {
        return productsList.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {
        private TextView name,id,city,country,grate_1;
        private Button btn_delete;


        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            name = itemView.findViewById(R.id.lblNameProduct);
            id= itemView.findViewById(R.id.lblIdProduct);
            city = itemView.findViewById(R.id.lblDescProduct);
            country = itemView.findViewById(R.id.lblDiscountProduct);

        }
    }


    public ArrayList<Product> getList_personalized() {
        return list_personalized;
    }
}
