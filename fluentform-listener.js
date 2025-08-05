<script>
  /**
   * Autor: Kiko Luque
   * Linkedin: https://es.linkedin.com/in/kiko-luque-analitica
   * Email: kiko@kikoluque.com
   * Web: https://www.kikoluque.com
   *
   * Descripción:
   * Listener para formularios de Fluent Form (WordPress).
   * Envía un evento personalizado a Google Tag Manager (dataLayer) cuando el formulario se envía correctamente.
   * Incluye el ID del formulario y los datos rellenados por el usuario.
   * Compatible con múltiples formularios y validado para 2025.
   */
  (function($) {
    $(document).ready(function() {
      $('.frm-fluent-form').each(function() {
        var $form = $(this);

        $form.on('fluentform_submission_success', function() {
          var formId = $form.attr('data-form_id');
          var formElement = $form.get(0);
          var formData = new FormData(formElement);
          var campos = {};

          formData.forEach(function(valor, clave) {
            if (clave) {
              var claveLimpia = clave.replace(/\]$/g, '').replace(/[\[\]]/g, '_');
              campos[claveLimpia] = valor;
            }
          });

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'fluent_form_enviado',
            formId: formId,
            campos: campos
          });
        });
      });
    });
  })(jQuery);
</script>
