// wishlist btn
function addWishList(obj) {
    let icon = $(obj).find('i');
    if (icon.hasClass('far fa-heart')) {
        $(icon).attr('class', 'fas fa-heart text-red');
    } else {
        $(icon).attr('class', 'far fa-heart');
    }
}