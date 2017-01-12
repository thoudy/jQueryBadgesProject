$(function() {
  $.ajax({
  url: 'https://www.codeschool.com/users/thoudy.json',
  dataType: 'jsonp',
  success: function(response) {
      addCourses(response.courses.completed);
      console.log('respo', response);
  }
});

function addCourses(courses) {

  var $badges = $('#badges');

  courses.forEach(function(course)
  {
    var $course = $('<div/>', {
      'class': 'course'
    }).appendTo($badges);

   $('<h3/>',{
      text: course.title
    }).appendTo($course);

    $('<img/>',{
      src: source.badge
    }).appendTo($course);

    $('<a/>', {
    'class': 'btn btn-primary',
    target: '_blank',
    href: course.url,
    text: 'See Course'
  }).appendTo($course);

})
}

});
