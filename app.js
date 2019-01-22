const row = document.createElement('div');
row.className = 'row-js';

const parent = document.querySelector('.row-wraper');
let color = 0;

for (let i = 0; i < 8; i++) {
    const row = document.createElement('div');
    row.className = 'row-js';

    for(let i = 0; i < 8; i ++){
        const light = document.createElement('div');
        
            light.className = 'light-js';
        row.appendChild(light);
        console.log(color);
        
        color++;
    }

    
    parent.appendChild(row);
}


