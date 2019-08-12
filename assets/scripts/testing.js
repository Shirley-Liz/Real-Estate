$(document).ready(function(){
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAwrdWBHcMo6xlvUp0qAavF5osGKMrFfNc",
    authDomain: "real-estate-9882c.firebaseapp.com",
    databaseURL: "https://real-estate-9882c.firebaseio.com",
    projectId: "real-estate-9882c",
    storageBucket: "real-estate-9882c.appspot.com",
    messagingSenderId: "1077907462804",
    appId: "1:1077907462804:web:bd7b165973428aa6"
    };
    
    firebase.initializeApp(config);

    //create firebase references
    var Auth = firebase.auth(); 
    var dbRef = firebase.database();
    var agencyRef = dbRef.ref('agencies')
    var usersRef = dbRef.ref('users')
    // var auth = null;

   
 
  $('#sign-out').on('click', function(e) {
    e.preventDefault();
    firebase.auth().signOut()
    window.location.href = "sign-in.html";
  });

  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
         var uid = user.uid;
         console.log(uid);
          // User is signed in.
         // var username =firebase.auth().currentUser.displayName;
         $(".promoted").hide();
         signout= document.getElementById('sign-out');
         signout.classList.remove('hide');

         signed=document.getElementById('sign-in');
         signed.classList.add('hide');

         $('.actions').append('<span class="user-name" style="color:#1396e2" style="font-weight:bold">   Hello , '+user.email+' !!</span>');
          
        } else {
          // No user is signed in.
          console.log("no user");
          signout= document.getElementById('sign-out');
          signout.classList.add('hide');

          signed=document.getElementById('sign-in');
          signed.classList.remove('hide');
        } 
  });

 
  
  // /////////////////////////////////////////////////////////////
  //                                                            //
  //  RETRIEVE  DATA AND POPULATING IT                          //
  //                                                            //
  // /////////////////////////////////////////////////////////////

  // var uid = firebase.auth().currentUser.uid;
  

  // retrieving land properties....
  var leadsRef = firebase.database().ref('properties/Land');
  leadsRef.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();

      
      //
      var Title=childSnapshot.val().Title;
    // alert(Title);
    var Address=childSnapshot.val().Address;
    var Area=childSnapshot.val().Area;
    var description=childSnapshot.val().Description;
    var price=childSnapshot.val().Price;
    var Land_Type=childSnapshot.val().Land_Type;
    var Photos=childSnapshot.val().Photos;
    var Status=childSnapshot.val().Status;
    
    // $("#title").append(Title);
    // document.getElementById("image").src = Photos;
    // $("#adress").append(Address);
    // $("#price").append(price);
    // $("#desc").append(description);
    // $("#area").append(Area);
    // $("#status").append(Status);
    $(".display-lines").
    append(
      '<div class="property">' +
      '<figure class="tag status">'+Status+'</figure>' +  
      '<figure class="type" title="Land" id="type"><img src="assets/img/property-types/land.png" alt=""></figure>' +
      '<div class="property-image" >' +
          '<a href="property-detail.html">' +
              '<img   alt="" src= "'+Photos+'"   >' +
          '</a>' +
      '</div>' +
      '<div class="info">' +
          '<header>' +
              '<a href="property-detail.html"><h3>'+Title+'</h3></a>' +
              '<figure >'+Address+'</figure>' +
          '</header>' +
          '<div class="tag price" >UGX '+price+'</div>' +
          '<aside>' +
              '<p >'+description +'</p>' +
              
              '<dl>' +
                  '<dt>Status:</dt>' +
                  '<dd >'+Status+ '</dd>' +
                  '<dt>Area:</dt>' +
                  '<dd><span >'+Area+ '</span> m<sup>2</sup></dd>' +
                  

              '</dl>' +
          '</aside>' +
          '<a href="property-detail.html" class="link-arrow">Read More</a>' +
      '</div>' +
    '</div>'
    );

    $(".owl-carousel homepage-slider carousel-full-width").
    append(
      '<div class="slide">' +
        '<div class="container">' +
          '<div class="overlay">' +
              '<div class="info">' +
                  '<div class="tag price">UGX '+price+'</div>' +
                  '<h3>'+Title+'</h3>' +
                  '<figure>'+Address+'</figure>' +
              '</div>' +
              '<hr>' +
              '<a href="property-detail.html" class="link-arrow">Read More</a>' +
          '</div>' +
        '</div>' +
        '<img alt="" src="'+Photos+'">' +
      '</div>');
    });


    
      
  });
  // retrieveing recent properties...
  var leadsRef = firebase.database().ref('properties/Land');
  leadsRef.orderByChild("TimeOn").limitToLast(2).once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();

      
      //
      var Title=childSnapshot.val().Title;
    // alert(Title);
    var Address=childSnapshot.val().Address;
    var Area=childSnapshot.val().Area;
    var description=childSnapshot.val().Description;
    var price=childSnapshot.val().Price;
    var Land_Type=childSnapshot.val().Land_Type;
    var Photos=childSnapshot.val().Photos;
    var Status=childSnapshot.val().Status;

  $(".recent").
    append(
      '<div class="property small">' +
        '<a href="property-detail.html">' +
            '<div class="property-image">' +
                '<img alt="" src="'+Photos+'">' +
            '</div>' +
        '</a>' +
        '<div class="info">' +
            '<a href="property-detail.html"><h4>'+Title+'</h4></a>' +
            '<figure>'+Address+'</figure>' +
            '<div class="tag price">UGX '+price+  '</div>'  +
        '</div>' +
    '</div>'
    );
    });

    

  });

  //retrieving houses properties...
  // TODO: retrieving houses properties
  var houseref =firebase.database().ref('properties/house');
  houseref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {


    });
  });


  /// retrieving users......./

  //  TODO:  retrieving agents
  var useeref =firebase.database().ref('property owners/seller');
  useeref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {


    });
  });
   //  TODO:  retrieving agency
  var useeref =firebase.database().ref('property owners/Agency');
  useeref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {


    });
  });

  ///add all properties
  //  TODO: retriev all properties
  var propref =firebase.database().ref('AllProperty/');
  propref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {


    });
  });



  
});

// var pageSize = 3;
// var ref = firebase.database().ref('swapi/people').orderByKey().limitToLast(pageSize);

// function paginate(cursor) {
//   var paginatedRef = ref;
//   if (cursor) {
//     paginatedRef = ref.endAt(cursor);
//   }
//   return paginatedRef.once('value').then(snap => snap.val());
// }

// function readAllPages(cursor) {
//   return paginate(cursor).then(values => {
//     var orderedKeys = Object.keys(values).sort((a, b) => +a > +b);
//     console.log('cursor', cursor, 'orderedKeys', orderedKeys);
//     if (orderedKeys.length == pageSize) {
//       return readAllPages(orderedKeys[0]);
//     }
//   });
// }

// readAllPages();









