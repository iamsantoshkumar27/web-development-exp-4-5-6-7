const sales = [5000, 3000, 700, 10000, 400, 800, 600, 950, 1500, 550];
const count = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < sales.length; i++) {
    let salary = 200 + (0.09 * sales[i]);
    if(salary >= 200 && salary <= 299){
        count[0]++;   
    }
       else if(salary >= 300 && salary <= 399){
        count[1]++;
       }
        else if(salary >= 400 && salary <= 499){
            count[2]++;
        }
        else if(salary >= 500 && salary <= 599){
            count[3]++;
        }
        else if(salary >= 600 && salary <= 699){
            count[4]++;
        }
        else if(salary >= 700 && salary <= 799){
            count[5]++;
        }
        else if(salary >= 800 && salary <= 899){
            count[6]++;
        }
        else if(salary >= 900 && salary <= 999){
            count[7]++;
        }
        else if(salary >= 1000){
            count[8]++;
        }
    }
    console.log(count);
    let body = document.querySelector("body");
    let h3 = document.createElement("h3");
    body.appendChild(h3);
    h3.innerText = Number of salesman is : ${count};