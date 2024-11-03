try {
    console.log(x)
}
catch(e){
    throw new Error("Declare the variable first!")
    console.log("Error is", e)
}
finally{
    console.log("i will always run!")
}