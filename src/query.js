//Function to find the quried element in the matrix 

function element(arr,n,q){
    let res=[];
    for(let i=0;i<n;i++){
        if(arr[i]==q){
            res.push(arr[i]);
        }else{
            return -1;
        }
    }
    return res;
}

