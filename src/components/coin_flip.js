import React, { useState } from 'react'

const CoinFlip = () => {
    const [toss, setToss] = useState("");
    function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }

    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5){
                attempts++;
                let result = tossCoin();
                if(result === "heads"){
                    headsCount++;
                } else if(attempts === 40){
                    return reject(`${attempts} have been reached, none with 5 heads in a row :(`);
                }else{
                    headsCount = 0;
                }
            }
            resolve("five heads were flipped in a row!");
        });
    }
    fiveHeads()
    .then( res => setToss(res) )
    .catch( err => setToss(err) );


    return(
        <h1>{toss}</h1>
    );
}
export default CoinFlip