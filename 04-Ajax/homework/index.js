const myBtn = $("#boton");
const list = $("#lista");
const refresh = function (params) {
    list.empty()
    $.get("http://localhost:5000/amigos", (response) => {
        response.forEach((element) => {
            list.append(`<li>${element.id}: ${element.name} </li>`);
        });
    });
}
myBtn.click(refresh);

//get id

const btnId = $("#search");
const input = $("#input");
btnId.click(() => {
    const id = input.val();
    console.log(id);
    if (!isNaN(Number(id))) {
        $.get(`http://localhost:5000/amigos/${id}`, (response) => {
            console.log(response);
            $("#amigo").text(response.name);
        });
    }
});

//delete id

$("#delete").click(() => {
    const id = $("#inputDelete").val();
    if (!isNaN(Number(id))) {
        $.ajax({
            url:`http://localhost:5000/amigos/${id}`,
            type:"DELETE",
            success:()=>{
                
                $("#success").text("borrado con exito");
                refresh();
            },
        })
    }
});
