package com.example.pruebaparcial;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Spinner;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.pruebaparcial.Adapters.ListProductsAdapter;
import com.example.pruebaparcial.Model.Product;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.Query;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.Iterator;


public class ListProductsRecycler extends AppCompatActivity {
    private RecyclerView recycler_list_products;
    private ArrayList<Product> list_Products = new ArrayList<Product>();
    private DatabaseReference myDB;
    private ListProductsAdapter my_listAdapter;
    private String notification_result= "";
    private final static String CHANNEL_ID= "NOTIFICACION";
    private final static int NOTIFICATION_ID= 0;
    private Button btn_see_list_personalized, btn_search;
    private FirebaseFirestore mfirestore;
    private Query query;
    private Spinner options;
    private EditText txt_search;


    @Override
    public void onBackPressed() {
        super.onBackPressed();
        startActivity(new Intent(ListProductsRecycler.this, Home.class));
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_products);
        mfirestore = FirebaseFirestore.getInstance();
        recycler_list_products = findViewById(R.id.rcListProducts);
        myDB = FirebaseDatabase.getInstance().getReference("shopDB").child("Products");
        recycler_list_products.setLayoutManager(new LinearLayoutManager(this));
        my_listAdapter = new ListProductsAdapter(this, list_Products);
        recycler_list_products.setAdapter(my_listAdapter);

        options = (Spinner) findViewById(R.id.spinnerCategory);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this, R.array.options, android.R.layout.simple_spinner_item);
        options.setAdapter(adapter);
        txt_search = (EditText) findViewById(R.id.txt_search);


        mfirestore.collection("products").whereEqualTo(getIntent().getExtras().get("category").toString(),getIntent().getExtras().get("criterio").toString())
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            Integer count =0;
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                String id_delete = document.getId().toString();
                                String id = document.get("restaurant_id").toString();
                                String name = document.get("name").toString();
                                String city = document.get("borough").toString();
                                String country = document.get("cuisine").toString();
                                String grate_1 = document.get("grades").toString();
                                String grades = "";
                                count=0;
                                char[] aCaracteres = grate_1.toCharArray();
                                for(int i =0; i< aCaracteres.length ; i++)
                                {
                                    if(aCaracteres[i] == 'd')
                                    {
                                        if(aCaracteres[i+1]=='e')
                                        {
                                            if(aCaracteres[i+2]=='=')
                                            {
                                                grades = grades + "Nota "+count+"= "+ aCaracteres[i+3] +" ";
                                                count++;;
                                            }
                                        }

                                    }
                                }

                                Product product = new Product();
                                product.setId(id);
                                product.setName(name);
                                product.setCity(city);
                                product.setCountry(country);
                                product.setGrate_1(grades);
                                product.setId_delete(id_delete);
                                list_Products.add(product);
                            }
                            my_listAdapter.notifyDataSetChanged();
                        } else {

                        }
                    }
                });


    }



    @Override
    protected void onStart() {
        super.onStart();
    }
}
