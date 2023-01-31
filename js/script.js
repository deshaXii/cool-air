$(() => {

    $('body').on('click', '.add-more-input', () => {
        $('.for-append-more-area').append(`
            <div class="custom-texts">
                <div class="custom-text-box">
                    <span> اسم الغرفة</span>
                    <input name="room_name" type="text" placeholder="....">
                </div>
                <div class="custom-text-box">
                    <span> مساحة الغرفة</span>
                    <input name="room_size" type="text" placeholder="....">
                </div>
                <div class="custom-buttons">
                    <div class="add-more-input">
                        <span class="pe-7s-plus"></span>
                    </div>
                    <div class="remove-more-input">
                        <span class="pe-7s-close-circle"></span>
                    </div>
                </div>
            </div>
        `)
    });

    $('body').on('click', '.remove-more-input', function () {
        $(this).parent('.custom-buttons').parent('.custom-texts').remove()
    });

    $('.place-area input').on('change', function () {
        if ($(this)[0].checked && $(this).val() === 'غرف محددة') {
            $('.form-group.uniq-area').fadeIn().css('display', 'flex')
        } else {
            $('.form-group.uniq-area').fadeOut()
        }
    });


    $('.search-icon').on('click', function (e) {
        e.preventDefault();
        $('.search-area').toggleClass('open');
        if ($('.search-area').hasClass('open')) {
            $('.search-icon a i').attr('class', 'pe-7s-close-circle')
        } else {
            $('.search-icon a i').attr('class', 'pe-7s-search')
        }
    })

    // Add Padding to body to fix navbar fixed issue

    // get navbar height before set to body

    function setPaddingToBody() {
        let navbarHeight = $('nav.navbar').css('height')
        $('body').css('paddingTop', navbarHeight)
    }

    setPaddingToBody();


    // when resize the screen fix the issue too
    window.addEventListener('resize', function (event) {
        setPaddingToBody();
    })


})