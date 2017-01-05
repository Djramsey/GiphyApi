// JavaScript File

$(document).ready(function() {


 $( "#Button").click(function(){
    var SearchGiph =  $("input:text").val();
        
        
   
    
    var FirstUrlString = "https://api.giphy.com/v1/gifs/search?q="
    
    var UrlStringEnding ="&api_key=dc6zaTOxFJmzC"
    
    $.getJSON(
     
      
      
      "https://api.giphy.com/v1/gifs/search?q="+  SearchGiph + "&api_key=dc6zaTOxFJmzC" ,
     

     
       
     
     
      function(response) {
        console.log(response);
        $("#gif img" ).remove ();       
        $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">"); 
        
  
          
          
         
      });
    
    
    
    
    
    
        
        
     
     
 });
   
  });

console.log($("#Button"))

