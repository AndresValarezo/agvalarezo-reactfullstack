package com.example.pruebaparcial;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

public class Criterios extends AppCompatActivity {

    private EditText txt_search, txt_search1;
    private Spinner options,options1;
    private Button btn_search;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_criterios);

        options = (Spinner) findViewById(R.id.spinnerCategory);
        options1 = findViewById(R.id.spinnerCategory1);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this, R.array.options, android.R.layout.simple_spinner_item);
        options.setAdapter(adapter);
        options1.setAdapter(adapter);
        txt_search = (EditText) findViewById(R.id.txt_search);
        txt_search1 = findViewById(R.id.txt_search1);
        btn_search = (Button) findViewById(R.id.btn_search);

        btn_search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String category = options.getSelectedItem().toString();
                if(category.equals("Nombre"))
                {
                    category = "name";
                }
                else if(category.equals("Cocina"))
                {
                    category = "cuisine";
                }
                else if(category.equals("Barrio"))
                {
                    category = "borough";
                }

                else if(category.equals("Id"))
                {
                    category = "restaurant_id";
                }
                String category1 = options.getSelectedItem().toString();
                if(category1.equals("Nombre"))
                {
                    category1 = "name";
                }
                else if(category1.equals("Cocina"))
                {
                    category1 = "cuisine";
                }
                else if(category1.equals("Ciudad"))
                {
                    category1 = "borough";
                }

                else if(category1.equals("Id"))
                {
                    category1 = "restaurant_id";
                }
                Intent activity_list = new Intent(getApplicationContext(), ListProductsRecycler.class);
                activity_list.putExtra("category", category);
                activity_list.putExtra("category1",category1);
                activity_list.putExtra("criterio", txt_search.getText().toString());
                activity_list.putExtra("criterio1", txt_search1.getText().toString());
                startActivity(activity_list);
            }
        });

    }
}