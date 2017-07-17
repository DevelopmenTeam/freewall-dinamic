$(function () {
  var wall = new Freewall("#freewall");

  var color = {
    RandomRGBValue: function () {
      return Math.floor(Math.random() * 256);
    }
  };

  var size = {
    RandomSize: function () {
      return 1 + 3 * Math.floor(Math.random() * 150);
    }
  };

  var iterator = {
    NormalIterate: function (selector) {
      var i = 0;
      $(selector).each(function () {
        ++i;
      });
      return i;
    },
    RangeIterate: function (start, end) {
      for(var i = start; i < end; i++);
      return i;
    },
    ColumnIterate: function () {
      var mx;
      // var cols = this.NormalIterate('.brick');
    }
  };

  wall.reset({
    selector: '.brick',
    animate: true,
    cellW: 160,
    cellH: 160,
    delay: 50,
    onResize: function () {
      wall.fitWidth();
      // wall.refresh($(window).width() - 30, $(window).height() - 30);
    }
  });
  wall.fitWidth();
  // wall.fitZone($(window).width() - 30, $(window).height() - 30);

  $("#add-more").click(function () {
    var s, i, c;
    s = i = c= 0;

    i = iterator.NormalIterate('.brick');
    c = iterator.ColumnIterate();
    // r = iterator.NormalIterate('.row');
    // shape' + i.toString() + '

    var item = '<div class="col-md-'+ c +' brick"></div>';
    // var row = '<div class="row"></div>';

    // $('#freewall').append(item);
    wall.appendBlock(item);
    $('.col-md-'+ c +'.brick').css({
      'background-color': 'rgb(' + color.RandomRGBValue() + ',' + color.RandomRGBValue() + ',' + color.RandomRGBValue() + ')',
      // 'width': (s = size.RandomSize()) > 100 ? s : 100 + 'px',
      // 'height': (s = size.RandomSize()) > 100 ? s : 100 + 'px',
      'position': 'relative'
    });
    // $('.shape' + i + '.brick').attr({
    //   'data-width': (s = size.RandomSize()) > 100 ? s : 100 + 'px',
    //   'data-height': (s = size.RandomSize()) > 100 ? s : 100 + 'px'
    // });
  });
});


// var item = '<div class="shape' + i + ' brick"><div class="cover"></div></div>';

// $("#add-more").click(function (){
//   // console.log('new click');
//   alert('new click');
// });


/*SEMI FUNCIONA*/

/*
 var r, g, b, w, h, i, mxc;

 w = 1 + 3 * Math.floor(Math.random() * 100);
 h = 1 + 3 * Math.floor(Math.random() * 100);

 i = '1';

 $(function () {
 var wall = new Freewall("#freewall");
 wall.reset({
 selector: '.brick',
 animate: true,
 cellW: 160,
 cellH: 160,
 delay: 20,
 onResize: function () {
 wall.fitWidth();
 // wall.refresh(ww - 30, wh - 30);
 }
 });
 wall.fitWidth();
 $("#add-more").click(function () {
 $('.brick').each(function () {
 i = $this.id.value;
 console.log(i);
 });
 var item = '<div class="shape' + i + ' brick"><div class="cover"></div></div>';
 wall.appendBlock(item);
 $('.shape' + i + '.brick').css({
 'background-color': 'rgb(' + color.RandomRGBValue() + ',' + color.RandomRGBValue() + ',' + color.RandomRGBValue() + ')',
 'width': w + '%',
 'height': h + 'px'
 });
 i++;
 });
 // wall.fitZone(ww - 30, wh - 30);
 });


 var color = {
 RandomRGBValue: function () {
 return Math.floor(Math.random() * 256);
 }
 };
 */


/* NO FUNCIONA */

// var ww = $('.col-md-12').width();
// var wh = $('.col-md-12').height();

// console.log(ww);
// console.log(wh);

// $('.brick').each(function () {
//   this.style.backgroundColor = 'rgb(' + RandomRGBValue() + ',' + RandomRGBValue() + ',' + RandomRGBValue() + ')';
//   console.log(this.style.backgroundColor);
// });

// $(function () {
//   var wall = new Freewall("#freewall");
//   wall.reset({
//     selector: '.brick',
//     animate: true,
//     cellW: 100,
//     cellH: 'auto',
//     gutterY: 12,
//     gutterX: 12,
//     draggable: true,
//     onResize: function() {
//       wall.fitWidth();
//       wall.refresh();
//     }
//   });
//   wall.fitWidth();
// });


// var color = setInterval(function () {
// var r = RandomRGBValue();
// var g = RandomRGBValue();
// var b = RandomRGBValue();
// console.log('rgb(' + r + ',' + g + ',' + b + ')');
// }, 1500);
