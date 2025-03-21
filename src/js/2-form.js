const instance =
  basicLightbox.create(`<form class="feedback-form" autocomplete="off">
        <label class="label email-label">
          Email
          <input
            class="text-in email-input"
            type="email"
            name="email"
            autofocus
          />
        </label>
        <label class="label message-label">
          Message
          <textarea class="text-in textarea" name="message" rows="8"></textarea>
        </label>
        <button class="button" type="submit">Submit</button>
      </form>`);

instance.show();
