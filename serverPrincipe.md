#Server request handling
##get tasks:  
#### GET :   
* **/tasks/recent/{amount}**   
_return number(amount) of tasks in array object_  

##updating tasks:  
#### PUT:
* **/tasks/update/{taskId}**  
  body:{task} 
   
#### GET:

* **/tasks/delete/{taskId}** 
 _response:_{   
 isDeleted:boolean,     
}

##adding tasks   
#### POST:
 * **/tasks/add**  
 body:{task}
 _response:_   
{  
 isAdded:boolean, 
 id:string,     
}  
 
#Data exchange standarts:  
###Task to cominicate with server   
{  
  id:'string',  
  date:'string',// ISO 8601, example:2013-02-25   
  title:'string',  
  priority:number, //1-4  
  isDone:boolean    
}  

{  
isOk:boolean,
error:number,      
errorText:string  
}
