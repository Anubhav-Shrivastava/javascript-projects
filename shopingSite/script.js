const search=()=>{
     const  searchBox=document.getElementById('searchtext').value.toUpperCase();
    const storeItems=document.getElementById('itemsContainer');
    const prooduct=document.querySelectorAll('.item');
    const pName=storeItems.getElementsByTagName("h2");

    for(var i=0;i<pName;i++){
        let match =prooduct[1].getElementsByTagName("h2")[0];
        
    if(match){
        let textValue=match.textContent || match.innerHTML

        if(textValue.toUpperCase().indexOf(searchBox)>-1){
            prooduct[i].style.display ="";
        }else{
            prooduct[i].style.display ="none";
        }
      }
    }

}


