package com.example.pruebaparcial;

import android.app.ProgressDialog;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.ContextMenu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;

import java.util.HashMap;
import java.util.Map;

public class AddProduct extends AppCompatActivity{

    private EditText lbl_nameProduct, lbl_priceProduct, lbl_descriptionProduct, lbl_Id_Product, lbl_discount_product;
    private Button btn_addProduct;
    private DatabaseReference mDatabase;
    private StorageReference storageReference;
    private FirebaseFirestore mfirestore;
    private FirebaseAuth mAuth;
    private String store_path = "products/*";

    private static final int COD_SEL_STORAGE= 200;
    private static final int COD_SEL_IMAGE= 300;

    private Uri image_url;
    String photo = "photo";
    private String id_image;
    private String id_Product,name_Product, price_Product,description_Product, discount_Product ;

    private ProgressDialog progressDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_product);

        lbl_nameProduct = findViewById(R.id.lbl_name_Product);
        lbl_priceProduct = findViewById(R.id.txt_price_EProduct);
        lbl_descriptionProduct = findViewById(R.id.txt_desc_EProduct);
        lbl_Id_Product= findViewById(R.id.txt_id_EProduct);
        lbl_discount_product = findViewById(R.id.txt_discount_EProduct);
        btn_addProduct = findViewById(R.id.btn_search);

        progressDialog = new ProgressDialog(this);

        registerForContextMenu(lbl_descriptionProduct);

        mDatabase = FirebaseDatabase.getInstance().getReference();
        storageReference = FirebaseStorage.getInstance().getReference();
        mfirestore = FirebaseFirestore.getInstance();
        mAuth = FirebaseAuth.getInstance();



        btn_addProduct.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                id_Product = lbl_Id_Product.getText().toString();
                name_Product = lbl_nameProduct.getText().toString();
                price_Product = lbl_priceProduct.getText().toString();
                description_Product= lbl_descriptionProduct.getText().toString();
                discount_Product = lbl_discount_product.getText().toString();

                Map<String,Object> objectProduct = new HashMap<>();
                objectProduct.put("id",id_Product);
                objectProduct.put("name",name_Product);
                objectProduct.put("price",price_Product);
                objectProduct.put("description",description_Product);
                objectProduct.put("discount",discount_Product);



                if(id_Product == null || id_Product.equals(""))
                {
                    Toast.makeText(getApplicationContext(), "Ingrese el id por favor", Toast.LENGTH_SHORT).show();
                }
                else{


                    mfirestore.collection("products").document(id_Product).set(objectProduct).addOnSuccessListener(new OnSuccessListener<Void>() {
                        @Override
                        public void onSuccess(Void unused) {
                            Toast.makeText(getApplicationContext(), "Creado exitosamente", Toast.LENGTH_SHORT).show();
                        }
                    }).addOnFailureListener(new OnFailureListener() {
                        @Override
                        public void onFailure(@NonNull Exception e) {
                            Toast.makeText(getApplicationContext(), "Error al ingresar", Toast.LENGTH_SHORT).show();
                        }
                    });
                    Intent intent = new Intent(getApplicationContext(), ListProductsRecycler.class);
                    startActivity(intent);

                }

            }
        });


    }



    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        super.onCreateContextMenu(menu, v, menuInfo);
        getMenuInflater().inflate(R.menu.menu_contextual_1,menu);
    }

    @Override
    public boolean onContextItemSelected(@NonNull MenuItem item) {
        int number = item.getItemId();
        switch (number)
        {
            case R.id.item_words_mayus:
                lbl_descriptionProduct.setText(lbl_descriptionProduct.getText().toString().toUpperCase());
                return true;
            case R.id.item_words_min:
                lbl_descriptionProduct.setText(lbl_descriptionProduct.getText().toString().toLowerCase());
                return true;
            case R.id.first_words_uppercase:
                String str_aux = lbl_descriptionProduct.getText().toString();
                String[] array_aux= str_aux.split(" ");
                String result = "";
                for(int i =0;i < array_aux.length;i++)
                {
                    result = result +" "+ to_Upper_Case(array_aux[i]);
                }
                lbl_descriptionProduct.setText(result);
                return true;
        }
        return super.onContextItemSelected(item);
    }



    public static String to_Upper_Case(String valor) {
        if (valor == null || valor.isEmpty()) {
            return valor;
        } else {
            return  valor.toUpperCase().charAt(0) + valor.substring(1, valor.length()).toLowerCase();
        }
    }
}

