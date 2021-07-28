//Function to find an element in an unsorted array

 function search(arr, n, x){
     let i;
     for(i = 0; i < n; i++){
        if(arr[i]==x){
            return i;
        }else{
            return -1
        }
     }
 }

 //Main Function to find an element
  let arr=[2,3,5,8,9,13];
  let n = arr.length;
  let x =9;
 let res= search(arr,n,x);
  if(res==-1){
      console.log("No element found")
  }
  else{
      console.log(`element found in ${res}`)
  }
