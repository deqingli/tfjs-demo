/**
* @file require index
* @author wangjunting
*/

// require('./src/index');

import './common/lib/swan-game-adapter';
import * as tf from './src/tfjs';

let model;

// console.log(tf);

async function loadModel(){
    model = await tf.loadModel("./models/chess-model-1.json");
    const optimizer = tf.train.sgd(0.01);
    model.compile({
        optimizer: optimizer,
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });
}
loadModel()
setTimeout(function(){
    console.log(model);

}, 5000)