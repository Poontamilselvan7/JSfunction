//promise
function attendence(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let attendenceAP=true;
            if(attendenceAP)
                resolve("Present");
            else
                reject("Absent");
        },2000);
    })
}
function lunch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lunch=true;
            if(lunch)
                resolve("Eated");
            else
                reject("Not Eated");
        },2000);
    })
}
function goingtohome(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let home=true;
            if(home)
                resolve("Bus Departed");
            else
                reject("Bus not Departed");
        },2000);
    })
}

attendence().then((output)=>{console.log(output); return lunch().then((output)=>{console.log(output); return goingtohome().then((output)=>{console.log(output)}).catch(err=>{console.log(err)})})});




//async and await
function attendence(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let attendenceAP=true;
            if(attendenceAP)
                resolve("Present");
            else
                reject("Absent");
        },2000);
    })
}
function lunch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lunch=true;
            if(lunch)
                resolve("Eated");
            else
                reject("Not Eated");
        },2000);
    })
}
function goingtohome(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let home=false;
            if(home)
                resolve("Bus Departed");
            else
                reject("Bus not Departed");
        },2000);
    })
}

async function final(){
    try {
        let a=await attendence();
        console.log(a);
        let l=await lunch();
        console.log(l);
        let h=await goingtohome();
        console.log(h);
    } catch (error) {
        console.log(error);
    }
}

final();


//callback example
let a="ABC";
function file(a,callback){
    setTimeout(()=>{
        console.log(`file ${a} is processing`);
    },1000);
    setTimeout(()=>{
        console.log(`File ${a} got downloaded`);
        callback();
    },2000);
}
function file1(){
    setTimeout(()=>{
        console.log(`Download completed`);
    },2000);
}

file(a,file1);


// Date valid or invalid
let d=2
let m=2;
let y=2024;


switch(m){
    case 1:
        if(d>=1 && d<=31)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 2:
        if(d>=1 && d<=28)
            console.log("This date is Valid");
        else if(d==29){
            if((y%400==0) || (y%4==0 && y%100!=0)){
                console.log("This date is Valid");
            }
            else{
                console.log("This date is Invalid");
            }
        }
        else
            console.log("This date is Invalid");
        break;
    case 3:
        if(d>=1 && d<=31)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 4:
        if(d>=1 && d<=30)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 5:
        if(d>=1 && d<=31)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 6:
        if(d>=1 && d<=30)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 7:
        if(d>=1 && d<=31)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 8:
        if(d>=1 && d<=31)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 9:
        if(d>=1 && d<=30)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 10:
        if(d>=1 && d<=31)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 11:
        if(d>=1 && d<=30)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
    case 12:
        if(d>=1 && d<=31)
            console.log("This date is Valid");
        else
            console.log("This date is Invalid");
        break;
}