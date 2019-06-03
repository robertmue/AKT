AKT = {};
AKT.kbs = {};
AKT.state = {};

console.debug('AKT initialised!');

AKT.start = function () {
    var div = $('#menus');
    AKT.menusClickHandler(div);
    $('button').css('display','none');
    $('#menus').css('display','block');
}

AKT.menusClickHandler = function (div) {
    console.debug(div);
    $(div).find('li.menus-dropdown > a').on('click',function(event){
        console.debug('li');
        event.preventDefault()
        $(this).parent().find('ul').first().toggle(100);
        $(this).parent().siblings().find('ul').hide();
        AKT.state.currentMenuItem = $(this).parent().find('ul');
        console.debug('\nchildren', $(this).text(), $(this).parent().children('ul').length);

        //$('.akt_widget').css('display','none');
        //$('#sentences1').css('display','block'); 
        //$('.submenu').hide(); $('html').unbind('click');        

        //Hide menu when clicked outside
        $(this).parent().find('ul').mouseleave(function(){  
            var thisUI = $(this);
            $('html').click(function(){
                thisUI.hide();
                $('html').unbind('click');
            });
        });  
    });
};


