
function Alert({val , min , max , dangermsg}) {

   
console.log(val,min,max)
  return (
    <div className='w-full'>


{val >min && val<max  ? <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50  dark:text-blue-400" role="alert">
  <span className="font-medium"></span> All good !!.
</div>:null}


{
   val <min || val>=max ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
   <span className="font-medium">Danger alert!</span> {dangermsg}
 </div> : null 
}






    </div>
  )
}

export default Alert