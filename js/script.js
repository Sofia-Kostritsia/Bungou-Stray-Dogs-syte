    $(document).ready(function(){
        const urlParams = new URLSearchParams(window.location.search);
        const blockToShow = urlParams.get('block');
        
        if (blockToShow === 'akutagawa') {
            $('#akutagawa').css('display', 'block');
        }
        if (blockToShow === 'chuuya') {
            $('#chuuya').css('display', 'block');
        }
        if (blockToShow === 'higuchi') {
            $('#higuchi').css('display', 'block');
        }
        if (blockToShow === 'kenji') {
            $('#kenji').css('display', 'block');
        }
        if (blockToShow === 'kunikida') {
            $('#kunikida').css('display', 'block');
        }
        if (blockToShow === 'ranpo') {
            $('#ranpo').css('display', 'block');
        }
        if (blockToShow === 'yosano') {
            $('#yosano').css('display', 'block');
        }
        if (blockToShow === 'oda') {
            $('#oda').css('display', 'block');
        }
        if (blockToShow === 'dazai') {
            $('#dazai').css('display', 'block');
        }
        if (blockToShow === 'ango') {
            $('#ango').css('display', 'block');
        }
        if (blockToShow === 'kyuoka') {
            $('#kyuoka').css('display', 'block');
        }
        if (blockToShow === 'atsushi') {
            $('#atsushi').css('display', 'block');
        }
    });
    