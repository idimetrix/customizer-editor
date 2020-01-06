angular.module('cr_Customify').factory('cr_URLManager', ['$location', function ($location) {
    var self = this;

    self.base2 = $location.protocol() + '://' + $location.host();
    self.base = $location.protocol() + '://' + 'dev.customizerapp.com';

    self.application = self.base2 + '/';

    self.dialogs = '';

    self.dev = self.base + "/";

    //Auth
    self.login = self.base + '/jsapi/login';
    self.logout = self.base + '/jsapi/logout';
    self.join = self.base + '/jsapi/join';
    self.users = self.base + '/jsapi/users';
    self.allusers = self.base + '/jsapi/allusers';
    self.editrole = self.base + '/jsapi/editrole';
    self.ban = self.base + '/jsapi/ban';
    self.edituser = self.base + '/jsapi/edituser';
    self.avatar = self.base + '/jsapi/uploads/avatar';

    //Pics & Products
    self.userpics = self.base + '/jsapi/userpics';
    self.pics = self.base + '/jsapi/pics';
    self.categories = self.base + '/jsapi/categories';
    self.allproducts = self.base + '/jsapi/allproducts';
    self.products = self.base + '/jsapi/products';
    self.product = self.base + '/jsapi/product';
    self.addcategory = self.base + '/jsapi/addcategory';
    self.addsubcategory = self.base + '/jsapi/addsubcategory';
    self.addproduct = self.base + '/jsapi/addproduct';
    self.editproduct = self.base + '/jsapi/editproduct';
    self.deleteproduct = self.base + '/jsapi/deleteproduct';
    self.setpiccategory = self.base + '/jsapi/setpiccategory';
    self.deletepiccategory = self.base + '/jsapi/deletepiccategory';
    self.categoryorder = self.base + '/jsapi/categoryorder';
    self.maketext = self.base + '/jsapi/maketext';
    self.addfont = self.base + '/jsapi/addfont';
    self.editfont = self.base + '/jsapi/editfont';
    self.getfonts = self.base + '/jsapi/getfonts';
    self.uploadfontpic = self.base + '/jsapi/uploadfontpic';

    //Uploads
    self.uploadpic = self.base + '/jsapi/uploadpic';
    self.uploadlibpic = self.base + '/jsapi/uploadlibpic';
    self.uploadavatar = self.base + '/jsapi/uploadavatar';
    self.uploadcover = self.base + '/jsapi/uploadcover';

    //templates
    self.template = self.base + '/jsapi/template';
    self.templates = self.base + '/jsapi/templates';
    self.templatecategories = self.base + '/jsapi/templatecategories';
    self.addtemplate = self.base + '/jsapi/addtemplate';
    self.edittemplate = self.base + '/jsapi/edittemplate';
    self.deletetemplate = self.base + '/jsapi/deletetemplate';
    self.settemplatecategory = self.base + '/jsapi/settemplatecategory';

    //library
    self.librarytemplate = self.base + '/jsapi/librarytemplate';
    self.librarytemplates = self.base + '/jsapi/librarytemplates';
    self.librarytemplatecategories = self.base + '/jsapi/librarytemplatecategories';
    self.addlibrarytemplate = self.base + '/jsapi/addlibrarytemplate';
    self.editlibrarytemplate = self.base + '/jsapi/editlibrarytemplate';
    self.deletelibrarytemplate = self.base + '/jsapi/deletelibrarytemplate';
    self.setlibrarytemplatecategory = self.base + '/jsapi/setlibrarytemplatecategory';

    self.uploadrename = self.base + '/jsapi/uploadrename';
    self.uploaddelete = self.base + '/jsapi/uploaddelete';
    self.uploadtomotifs = self.base + '/jsapi/uploadtomotifs';
    self.motifdelete = self.base + '/jsapi/motifdelete';
    self.motifrename = self.base + '/jsapi/motifrename';

    //settings
    self.getsettings = self.base + '/jsapi/getsettings';
    self.setsettings = self.base + '/jsapi/setsettings';

    //pay
    self.demopay = self.base + '/jsapi/demopay';
    self.pay = self.base + '/jsapi/pay';
    self.pay = self.base + '/jsapi/paypalpay';
    self.pay = self.base + '/jsapi/paypalpaycard';

    self.user = self.base + '/jsapi/user';
    self.cart = self.base + '/jsapi/cart';
    self.editcart = self.base + '/jsapi/editcart';

    //mail
    self.emails = self.base + '/jsapi/emails';
    self.addemail = self.base + '/jsapi/addemail';
    self.editemail = self.base + '/jsapi/editemail';

    //statistics
    self.getstats = self.base + '/jsapi/getstats';
    self.setstats = self.base + '/jsapi/setstats';

    return self;
}]);