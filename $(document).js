<script>
  $(document).ready(function() {
      $('#toggle-description').click(function(e) {
          e.preventDefault();
          $('.additional-lines').toggle();
          var text = $(this).text() === 'Show more' ? 'Show less' : 'Show more';
          $(this).text(text);
      });
  });
</script>



