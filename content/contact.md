+++ 
title = "Contact"
slug = "contact"
+++
{{< rawhtml >}}
<div class="container">
<form id="my-form" action="https://formspree.io/f/movaojvj" method="POST">
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" name="name" placeholder=" " required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="email" name="email" placeholder=" " required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea name="message" placeholder=" " required ></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<button class="submit-btn" id="my-form-button">Send Message</button>
			</div>
            <p id="my-form-status" class="col-xs-12"></p>
	</div>
    </form>
</div>
{{< /rawhtml >}}

