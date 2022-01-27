const daily = document.getElementById("pd");
const weekly = document.getElementById("pw");
const monthly = document.getElementById("pm");


/* WORK */
daily.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("hours").textContent = `${data[0].timeframes.daily.current}hrs`;
            document.getElementById("lwHours").innerHTML = `Last week: ${data[0].timeframes.daily.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

weekly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("hours").textContent = `${data[0].timeframes.weekly.current}hrs`;
            document.getElementById("lwHours").innerHTML = `Last week: ${data[0].timeframes.weekly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

monthly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("hours").textContent = `${data[0].timeframes.monthly.current}hrs`;
            document.getElementById("lwHours").innerHTML = `Last week: ${data[0].timeframes.monthly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

/* PLAY */
daily.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Playhours").textContent = `${data[1].timeframes.daily.current}hrs`;
            document.getElementById("PlaylwHours").innerHTML = `Last week: ${data[1].timeframes.daily.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

weekly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Playhours").textContent = `${data[1].timeframes.weekly.current}hrs`;
            document.getElementById("PlaylwHours").innerHTML = `Last week: ${data[1].timeframes.weekly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

monthly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Playhours").textContent = `${data[1].timeframes.monthly.current}hrs`;
            document.getElementById("PlaylwHours").innerHTML = `Last week: ${data[1].timeframes.monthly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

/* STUDY */
daily.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Studyhours").textContent = `${data[2].timeframes.daily.current}hrs`;
            document.getElementById("StudylwHours").innerHTML = `Last week: ${data[2].timeframes.daily.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

weekly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Studyhours").textContent = `${data[2].timeframes.weekly.current}hrs`;
            document.getElementById("StudylwHours").innerHTML = `Last week: ${data[2].timeframes.weekly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

monthly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Studyhours").textContent = `${data[2].timeframes.monthly.current}hrs`;
            document.getElementById("StudylwHours").innerHTML = `Last week: ${data[2].timeframes.monthly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

/* EXERCISE */
daily.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Exercisehours").textContent = `${data[3].timeframes.daily.current}hrs`;
            document.getElementById("ExerciselwHours").innerHTML = `Last week: ${data[3].timeframes.daily.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

weekly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Exercisehours").textContent = `${data[3].timeframes.weekly.current}hrs`;
            document.getElementById("ExerciselwHours").innerHTML = `Last week: ${data[3].timeframes.weekly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

monthly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Exercisehours").textContent = `${data[3].timeframes.monthly.current}hrs`;
            document.getElementById("ExerciselwHours").innerHTML = `Last week: ${data[3].timeframes.monthly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

/* SOCIAL */
daily.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Socialhours").textContent = `${data[4].timeframes.daily.current}hrs`;
            document.getElementById("SociallwHours").innerHTML = `Last week: ${data[4].timeframes.daily.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

weekly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Socialhours").textContent = `${data[4].timeframes.weekly.current}hrs`;
            document.getElementById("SociallwHours").innerHTML = `Last week: ${data[4].timeframes.weekly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

monthly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("Socialhours").textContent = `${data[4].timeframes.monthly.current}hrs`;
            document.getElementById("SociallwHours").innerHTML = `Last week: ${data[4].timeframes.monthly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

/* SELF CARE */
daily.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("SelfCareHours").textContent = `${data[5].timeframes.daily.current}hrs`;
            document.getElementById("SelfCarelwHours").innerHTML = `Last week: ${data[5].timeframes.daily.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

weekly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("SelfCareHours").textContent = `${data[5].timeframes.weekly.current}hrs`;
            document.getElementById("SelfCarelwHours").innerHTML = `Last week: ${data[5].timeframes.weekly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});

monthly.addEventListener('click', () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("SelfCareHours").textContent = `${data[5].timeframes.monthly.current}hrs`;
            document.getElementById("SelfCarelwHours").innerHTML = `Last week: ${data[5].timeframes.monthly.previous}hrs`;
        })
        .catch(err => {
            console.error(err);
        });
});




