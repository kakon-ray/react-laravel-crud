<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CrudModel;

class ReactDataReciver extends Controller
{
    function submit_data(Request $requst){
    
          $filepath = $request->file('file')->store('/app/public');
         $productName = $requst->input('productName');
         $price = $requst->input('price');

         

         return $productName;

    }


      function get_data(){
        
        $getProduct = CrudModel::get();

        if($getProduct){
            return response()->json($getProduct);
        }
    }

      function delete_data(Request $requst,$id){
        $responce = CrudModel::where('id', $id)->delete();
         
        if($responce == 1){
            return true;
        }
    }
      function get_update_data(Request $requst,$id){
        $responce = CrudModel::where('id', $id)->first();
         
       return $responce;
    }
      function update_product(Request $requst){
         $img = $requst->input('image');
         $productName = $requst->input('productName');
         $price = $requst->input('price');
         $id = $requst->input('id');

         $responce = CrudModel::where('id', $id)->update(['img' => $img, 'name' => $productName,'price'=>$price],);

        if($responce == 1){
            return 'true';
        }
    }


}
