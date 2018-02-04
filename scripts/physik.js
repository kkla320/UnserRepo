function einstein(m ,c){
    return m*c^2;
}

function ausfallswinkel(start,kollisonsnormale){
    var skalar = start.x*kollisonsnormale.x+start.y*kollisonsnormale.y;
    var length = Math.sqrt(betrag(start))*Math.sqrt(betrag(kollisonsnormale));
    var phi = Math.acos(skalar/length);
    var steigung = "";
    if(phi != 90){
        steigung = Math.tan(-phi);
    }else{
        steigung = (kollisonsnormale.y-start.y)/(kollisonsnormale.x-start.x);
    }
    return steigung;
}

function tangente(x,y){
    //if classe ball 
}

function normale(m){
    return (-1/m);
}

function betrag(coords){
    coords.x = x^2;
    coords.y = y^2;
    return coords;
}