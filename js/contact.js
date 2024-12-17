//让姓名文本框获得焦点。
document.getElementById("name").focus();
var form = document.getElementById('contact');
form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        return;
    } else {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let telephone = document.getElementById("telephone").value;
        let company = document.getElementById("company").value;
        let sex = [...document.getElementsByName("sex")];
        //获得性别选项值。
        sex.forEach(item => {
            if (item.checked) {
                sexStr = item.value;
            }
        });
        let age = [...document.getElementById("age").options];
        //获得年龄选项值。
        age.forEach(item => {
            if (item.selected) {
                ageStr = item.firstChild.nodeValue;
            }
        });
        let interestStr = ""; //获得爱好选项值。
        let interest = [...document.getElementsByName("interest")];
        interest.forEach(item => {
            if (item.checked) {
                interestStr += item.value;
            }
        });
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("submitmessage").innerText = `姓名：${name}
        性别：${sexStr}
        年龄范围：${ageStr}
        爱好：${interestStr}
        电子邮件：${email}
        固定电话：${telephone}
        公司：${company}`;
        event.preventDefault();
        setTimeout("delay()", 2000);
    }
}, false);

function delay() {
    if (confirm('确定提交吗？')) {
        form.submit()
    };
}