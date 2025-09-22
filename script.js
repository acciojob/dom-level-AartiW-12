//your JS code here. If required.
let level = 0;

        const ele = document.getElementById("level")

        let curr = ele;
        while(curr){
            level++;
            curr = curr.parentElement;
        }

        alert("The level of the element is: " + level)