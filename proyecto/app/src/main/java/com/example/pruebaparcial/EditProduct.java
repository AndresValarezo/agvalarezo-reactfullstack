package com.example.pruebaparcial;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;
import com.google.firebase.storage.UploadTask;

import java.util.HashMap;
import java.util.Map;

public class EditProduct extends AppCompatActivity {

    private EditText txt_name_product, txt_price_product, txt_description_product, txt_discount_product, txt_id_product;
    private Bundle bundle_Product;
    private FirebaseFirestore mfirestore;
    private Button btn_update;
    private String storage_path = "products/*";
    private Uri image_url;
    private StorageReference storageReference;
    private DatabaseReference mDatabase;

    private static final int COD_SEL_STORAGE= 200;
    private static final int COD_SEL_IMAGE= 300;

    String photo = "photo";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_product);

        bundle_Product = getIntent().getExtras();
        mfirestore = FirebaseFirestore.getInstance();
        storageReference = FirebaseStorage.getInstance().getReference();
        mDatabase = FirebaseDatabase.getInstance().getReference();

        txt_name_product = findViewById(R.id.txt_name_EProduct);
        txt_price_product = findViewById(R.id.txt_price_EProduct);
        txt_description_product = findViewById(R.id.txt_desc_EProduct);
        txt_discount_product = findViewById(R.id.txt_discount_EProduct);
        txt_id_product = findViewById(R.id.txt_id_EProduct);
        btn_update = findViewById(R.id.btn_search);

        txt_name_product.setText(bundle_Product.get("name_product").toString());
        txt_price_product.setText(bundle_Product.get("price_product").toString());
        txt_description_product.setText(bundle_Product.get("description_product").toString());
        txt_discount_product.setText(bundle_Product.get("discount_product").toString());
        txt_id_product.setText(bundle_Product.get("id_product").toString());

        txt_price_product.setEnabled(false);
        txt_id_product.setEnabled(false);

        btn_update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String name_updated, price_updated, description_updated, discount_updated, id_updated;
                name_updated = txt_name_product.getText().toString();
                price_updated = txt_price_product.getText().toString();
                discount_updated = txt_discount_product.getText().toString();
                description_updated = txt_description_product.getText().toString();
                id_updated = txt_id_product.getText().toString();

                if(name_updated.isEmpty() && price_updated.isEmpty() && discount_updated.isEmpty() && description_updated.isEmpty() && id_updated.isEmpty()){
                    Toast.makeText(getApplicationContext(), "Ingresar todos los datos de los campos por favor !!!", Toast.LENGTH_SHORT).show();
                }else{
                    updateProduct(name_updated, description_updated, price_updated, discount_updated, id_updated);
                }

            }
        });



    }

    private void uploadPhoto() {
        Intent i = new Intent(Intent.ACTION_PICK);
        i.setType("image/*");
        startActivityForResult(i, COD_SEL_IMAGE);
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        if(resultCode == RESULT_OK){
            if (requestCode == COD_SEL_IMAGE){
                image_url = data.getData();
                subirPhoto(image_url);
            }
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    private void subirPhoto(Uri image_url) {

        String rute_storage_photo = storage_path + "" + photo + txt_id_product.getText().toString();
        StorageReference reference = storageReference.child(rute_storage_photo);
        reference.putFile(image_url).addOnSuccessListener(new OnSuccessListener<UploadTask.TaskSnapshot>() {
            @Override
            public void onSuccess(UploadTask.TaskSnapshot taskSnapshot) {
                Task<Uri> uriTask = taskSnapshot.getStorage().getDownloadUrl();
                while (!uriTask.isSuccessful());
                if (uriTask.isSuccessful()){
                    uriTask.addOnSuccessListener(new OnSuccessListener<Uri>() {
                        @Override
                        public void onSuccess(Uri uri) {
                            String download_uri = uri.toString();
                            HashMap<String, Object> map = new HashMap<>();
                            map.put("photo", download_uri);
                            mfirestore.collection("products").document(txt_id_product.getText().toString()).update(map);
                            Toast.makeText(getApplicationContext(), "Foto actualizada", Toast.LENGTH_SHORT).show();

                        }
                    });
                }
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(@NonNull Exception e) {
                Toast.makeText(getApplicationContext(), "Error al cargar foto", Toast.LENGTH_SHORT).show();
            }
        });
    }





    private void updateProduct(String name, String description, String price, String discount, String id) {
        Map<String, Object> objectProduct = new HashMap<>();
        objectProduct.put("restaurant_id",id);
        objectProduct.put("name",name);
        objectProduct.put("borough",description);
        objectProduct.put("cuisine",discount);


        mfirestore.collection("products").document(id).update(objectProduct).addOnSuccessListener(new OnSuccessListener<Void>() {
            @Override
            public void onSuccess(Void unused) {
                Toast.makeText(getApplicationContext(), "Actualizado exitosamente", Toast.LENGTH_SHORT).show();
                Intent activity_list = new Intent(getApplicationContext(), Home.class);
                startActivity(activity_list);
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(@NonNull Exception e) {
                Toast.makeText(getApplicationContext(), "Error al actualizar", Toast.LENGTH_SHORT).show();
            }
        });
    }

}