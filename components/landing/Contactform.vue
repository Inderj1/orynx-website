<script setup>
const formRef = ref(null);
const resultMessage = ref("");
const resultType = ref("");
const isSubmitting = ref(false);

const handleSubmit = async () => {
  const form = formRef.value;
  if (!form) return;

  form.classList.add("was-validated");
  if (!form.checkValidity()) {
    form.querySelector(":invalid")?.focus();
    return;
  }

  isSubmitting.value = true;
  resultMessage.value = "";

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    resultType.value = response.status === 200 ? "success" : "error";
    resultMessage.value = json.message;
  } catch {
    resultType.value = "error";
    resultMessage.value = "Something went wrong. Please try again.";
  } finally {
    isSubmitting.value = false;
    form.reset();
    form.classList.remove("was-validated");
    setTimeout(() => { resultMessage.value = ""; }, 5000);
  }
};

const inputClass = "w-full px-3.5 py-2.5 text-sm bg-white border border-border rounded-xl placeholder-text-muted focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_#e6f4f9] transition-all duration-150";
</script>

<template>
  <form ref="formRef" @submit.prevent="handleSubmit" class="space-y-4" novalidate>
    <input type="hidden" name="access_key" value="f656e7e3-c47a-4f40-a611-f3375b052645" />
    <input type="checkbox" class="hidden" style="display: none" name="botcheck" />

    <div class="grid sm:grid-cols-2 gap-4">
      <div>
        <label class="text-sm font-medium text-text-secondary mb-2 block">First name</label>
        <input type="text" name="firstName" placeholder="First name" required :class="inputClass" />
        <p class="invalid-feedback text-red-500 text-xs mt-1">Please provide your first name.</p>
      </div>
      <div>
        <label class="text-sm font-medium text-text-secondary mb-2 block">Last name</label>
        <input type="text" name="lastName" placeholder="Last name" required :class="inputClass" />
        <p class="invalid-feedback text-red-500 text-xs mt-1">Please provide your last name.</p>
      </div>
    </div>

    <div>
      <label class="text-sm font-medium text-text-secondary mb-2 block">Business email</label>
      <input type="email" name="email" placeholder="you@company.com" required :class="inputClass" />
      <p class="empty-feedback text-red-500 text-xs mt-1">Please provide your email.</p>
      <p class="invalid-feedback text-red-500 text-xs mt-1">Please provide a valid email.</p>
    </div>

    <div>
      <label class="text-sm font-medium text-text-secondary mb-2 block">Company</label>
      <input type="text" name="company" placeholder="Company name" required :class="inputClass" />
      <p class="invalid-feedback text-red-500 text-xs mt-1">Please provide your company name.</p>
    </div>

    <div>
      <label class="text-sm font-medium text-text-secondary mb-2 block">Type of inquiry</label>
      <select name="inquiryType" required :class="inputClass">
        <option value="" disabled selected>Select one</option>
        <option value="general">General Inquiry</option>
        <option value="product-demo">Product Demo</option>
        <option value="consulting">Consulting Services</option>
        <option value="support">Technical Support</option>
        <option value="other">Other</option>
      </select>
      <p class="invalid-feedback text-red-500 text-xs mt-1">Please select an inquiry type.</p>
    </div>

    <div>
      <label class="text-sm font-medium text-text-secondary mb-2 block">Message</label>
      <textarea name="message" placeholder="Tell us about your project..." required rows="4" :class="[inputClass, 'resize-none']"></textarea>
      <p class="invalid-feedback text-red-500 text-xs mt-1">Please enter your message.</p>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full px-6 py-3 bg-primary text-white font-medium rounded-pill hover:bg-primary-hover shadow-button disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
    >
      {{ isSubmitting ? "Sending..." : "Send Message" }}
    </button>

    <p v-if="resultMessage" :class="resultType === 'success' ? 'text-emerald-600' : 'text-red-600'" class="text-sm text-center">
      {{ resultMessage }}
    </p>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}
.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}
.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}
.was-validated :invalid {
  border-color: #ef4444;
}
</style>
