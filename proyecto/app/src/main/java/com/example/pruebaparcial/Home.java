package com.example.pruebaparcial;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import com.bumptech.glide.Glide;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.navigation.NavigationView;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GoogleAuthProvider;

public class Home extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener,
        DrawerLayout.DrawerListener{

    private FirebaseAuth mAuth;
    private TextView txtId,txtName,txtEmail;
    private ImageView imgUser;
    private DrawerLayout drawerLayout;
    private Button btnLogOut, btnDeleteCta, btn_add_product, btn_list_products, btn_gallery;
    private GoogleSignInClient mGoogleSingInClient;
    private GoogleSignInOptions gso;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        txtId = findViewById(R.id.lblId);
        txtName = findViewById(R.id.lblName);
        txtEmail = findViewById(R.id.lblEmailLI);
        imgUser = findViewById(R.id.imgUser);


        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar((Toolbar) findViewById(R.id.toolbar));

        drawerLayout = findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawerLayout, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawerLayout.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = findViewById(R.id.navigation_view);
        navigationView.setNavigationItemSelectedListener(this);

        drawerLayout.addDrawerListener(this);

        mAuth = FirebaseAuth.getInstance();
        FirebaseUser currentUser = mAuth.getCurrentUser();
        if(mAuth.getCurrentUser() != null) {
            txtId.setText(currentUser.getUid());
            txtName.setText(currentUser.getDisplayName());
            txtEmail.setText(currentUser.getEmail());

            Glide.with(this).load(currentUser.getPhotoUrl()).into(imgUser);
        }

        if(txtName.getText().toString().equals(""))
        {
            int position = currentUser.getEmail().indexOf("@");
            String user = currentUser.getEmail().substring(0, position);
            txtName.setText(user);
        }

        gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(getString(R.string.default_web_client_id))
                .requestEmail()
                .build();
        mGoogleSingInClient = GoogleSignIn.getClient(this,gso);


    }

    private void signOut(){
        FirebaseAuth.getInstance().signOut();
        mGoogleSingInClient.signOut().addOnCompleteListener(new OnCompleteListener<Void>() {
            @Override
            public void onComplete(@NonNull Task<Void> task) {
                Intent mainLoginActivity =  new Intent(getApplicationContext(), LogIn.class);
                mainLoginActivity.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                startActivity(mainLoginActivity);
                Home.this.finish();
            }
        });
    }


    @Override
    public void onDrawerSlide(@NonNull View drawerView, float slideOffset) {

    }

    @Override
    public void onDrawerOpened(@NonNull View drawerView) {

    }

    @Override
    public void onDrawerClosed(@NonNull View drawerView) {

    }

    @Override
    public void onDrawerStateChanged(int newState) {

    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        Intent intent = null;

        if(item.getItemId() == R.id.nav_addProduct){
            drawerLayout.closeDrawer(GravityCompat.START);
            Intent add_Product_Activity = new Intent(getApplicationContext(), AddProduct.class);
            startActivity(add_Product_Activity);
            return true;
        }
        if(item.getItemId() == R.id.nav_listProduct){
            drawerLayout.closeDrawer(GravityCompat.START);
            Intent list_Products_Activity = new Intent(getApplicationContext(), Criterios.class);
            startActivity(list_Products_Activity);
            return true;
        }

        if(item.getItemId() == R.id.nav_deleteAccount){
            drawerLayout.closeDrawer(GravityCompat.START);
            final FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
            GoogleSignInAccount signInAccount = GoogleSignIn.getLastSignedInAccount(getApplicationContext());
            if(signInAccount != null)
            {
                AuthCredential credential = GoogleAuthProvider.getCredential(signInAccount.getIdToken(),null);
                user.reauthenticate(credential).addOnCompleteListener(new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
                        if(task.isSuccessful())
                        {
                            user.delete().addOnCompleteListener(new OnCompleteListener<Void>() {
                                @Override
                                public void onComplete(@NonNull Task<Void> task) {
                                    Log.d("MainActivity", "onComplete: Usuario eliminado");
                                    signOut();
                                }
                            });
                        }else{
                            Log.d("MainActivity", "onComplete: Error al eliminar el Usuario");
                        }
                    }
                });
            }
            else{
                Log.d("MainActivity", "Error: reAuthenticateUser: user account is null");
                user.delete()
                        .addOnCompleteListener(new OnCompleteListener<Void>() {
                            @Override
                            public void onComplete(@NonNull Task<Void> task) {
                                if (task.isSuccessful()) {
                                    Log.d("MainActivity", "User account deleted.");
                                    signOut();
                                }
                            }
                        });
            }
            return  true;
        }

        if(item.getItemId() == R.id.nav_logOut){
            drawerLayout.closeDrawer(GravityCompat.START);
            mAuth.signOut();
            mGoogleSingInClient.signOut().addOnCompleteListener(new OnCompleteListener<Void>() {
                @Override
                public void onComplete(@NonNull Task<Void> task) {
                    if(task.isSuccessful())
                    {
                        Intent loginActivity = new Intent(getApplicationContext(), LogIn.class);
                        startActivity(loginActivity);
                        Home.this.finish();
                    }else{
                        Toast.makeText(getApplicationContext(), "No se pudo cerrar sesi+on con google",Toast.LENGTH_SHORT).show();

                    }
                }
            });
            return  true;
        }

        return false;
    }

    @Override
    public void onBackPressed() {
        if (drawerLayout.isDrawerOpen(GravityCompat.START)) {
            drawerLayout.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }



}