function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nezFG6YJG/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
    
function gotResults(error, results)
{
    {
        if (error)
        {
            console.error(error);
        } else {
            console.log(results);
            random_number_r = Math.floor(Math.random() * 255) + 1;
            random_number_g = Math.floor(Math.random() * 255) + 1;
            random_number_b = Math.floor(Math.random() * 255) + 1;
    
            document.getElementById("result_label").innerHTML = 'I can hear - '+
            results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
            (results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("
            +random_number_r+","+ramdom_number_g+","+random_number_r+")"
            document.getElementById("result_confidence").style.color = "rgb("
            +random_number_r+","+ramdom_number_g+","+random_number_r+")";
    
            img = document.getElementById('cat')
            img1 = document.getElementById('cow')
            img2 = document.getElementById('dog')
            img3 = document.getElementById('lion')
    
            if (results[0].label == "MEOWING")
            {
                img.src = 'catIcon.jpg';
                cat + 1
                
            }else if (results[0].label == "MOOING") {
                img1.src = 'cowIcon.jpg' ;
                cow + 1
            
            }else if (results[0].label == "BARKING") {
                img2.src = 'dogIcon.jpg' ;
                dog + 1
                
            }else{
                img3.src = 'lionIcon.jpg';
                lion + 1
      
    }
        }
    }
}
