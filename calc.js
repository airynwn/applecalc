let cont = 0;
let addAcc = document.getElementById("addAcc");

addAcc.addEventListener("click", () => {
    cont++;
    let container = document.getElementById("accounts");
    let col = document.createElement("div");
    col.classList.add("col");
    container.appendChild(col);
    let label = document.createElement("label");
    label.htmlFor = "acc" + cont;
    label.innerHTML = "Account " + cont + " characters";
    label.classList.add("form-label");
    let input = document.createElement("input");
    input.type = "number";
    input.name = "acc" + cont;
    input.id = "acc" + cont;
    input.classList.add("form-control-sm");
    col.appendChild(label);
    col.appendChild(input);
});

let form = document.forms[0];

// TODO delete accounts & reset

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // TODO: elixir price * elixir qty & crystal price * crystal qty -> total ED
    // Character per account array
    let chars = [];
    for (let i = 0; i < cont; i++) {
        chars[i] = document.getElementById("acc" + (i + 1)).value;
    }

    // Daily AP (3000 + 100 + 100)
    let daily = [];
    for (let i in chars) {
        daily[i] = chars[i] * 3200;
    }

    // Weekly AP (5000)
    let weekly = [];
    for (let i in chars) {
        weekly[i] = chars[i] * 5000;
    }

    let totalDaily = 0;
    daily.forEach((i) => { totalDaily += i });

    let totalWeekly = 0;
    weekly.forEach((i) => { totalWeekly += i });

    // TODO fix decimals bug
    let dailyLoquat = Math.floor(totalDaily / 320);
    let weeklyLoquat = Math.floor(totalWeekly / 320) + (dailyLoquat * 7);

    // WIP
    alert("daily: " + totalDaily + "\nweekly: " + totalWeekly + "\ndaily loquats: " + dailyLoquat + "\nweekly loquats: " + weeklyLoquat);
    // alert("weekly: " + totalWeekly);
    // alert("loquats: " + loquat);
});