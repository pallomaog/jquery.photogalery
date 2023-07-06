$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('.botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on("submit", function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $("#endereço-imagem-nova").val();
        const novoItem = $('<li></li>');
        $('<img>').attr('src', enderecoDaNovaImagem).appendTo(novoItem);
        $('<div class="overlay-image-link">').append(
            $('<a>').attr({
                href: enderecoDaNovaImagem,
                target: "_blank",
                title: "Ver imagem em tamanho real"
            }).text("Ver imagem em tamanho real")
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).hide().fadeIn(5000, function() {
            $('#endereço-imagem-nova').val('');
        });
    });
});

