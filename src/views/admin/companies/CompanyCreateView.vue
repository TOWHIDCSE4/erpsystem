<script setup>
import { storeToRefs } from "pinia";
import { useCompanyStore } from "../../../store/admin/company";
import { email, required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const { formState, submitted } = storeToRefs(useCompanyStore());

const { addRecord } = useCompanyStore();

function onUpload() {}

const rules = {
  name: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  email: {
    required: helpers.withMessage(t("validation.required"), required),
    email: helpers.withMessage(t("validation.email"), email),
  },
  phone: { required: helpers.withMessage(t("validation.required"), required) },
  tax_code: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  company_registry: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  currency_id: {
    required: helpers.withMessage(t("validation.required"), required),
  },
  address: {
    address: {
      required: helpers.withMessage(t("validation.required"), required),
    },
    province: {
      required: helpers.withMessage(t("validation.required"), required),
    },
    district: {
      required: helpers.withMessage(t("validation.required"), required),
    },
    ward: { required: helpers.withMessage(t("validation.required"), required) },
  },
};

const v$ = useVuelidate(rules, formState);

const handleSubmit = () => {
  v$.value.$validate();
  submitted.value = true;
  if (!v$.value.$error) {
    addRecord(formState.value);
  }
};
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card p-fluid">
        <h5 class="m-0">Create Companies</h5>
        <hr />

        <form @submit.prevent="handleSubmit">
          <div class="formgrid grid">
            <div class="field col">
              <label
                for="name"
                :class="{ 'p-error': v$.name.$invalid && submitted }"
                >Name*</label
              >
              <InputText
                id="name"
                type="text"
                v-model="formState.name"
                :class="{ 'p-invalid': v$.name.$invalid && submitted }"
              />
              <span v-if="v$.name.$error && submitted">
                <span
                  id="name-error"
                  v-for="(error, index) of v$.name.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
            </div>
            <div class="field col">
              <label for="name2">Logo</label>
              <FileUpload
                mode="basic"
                name="demo[]"
                url="./upload.php"
                accept="image/*"
                :maxFileSize="1000000"
                @upload="onUpload"
              />
            </div>
          </div>

          <div class="formgrid grid">
            <div class="field col">
              <label
                for="company_registry"
                :class="{
                  'p-error': v$.company_registry.$invalid && submitted,
                }"
                >Company registry*</label
              >
              <InputText
                id="company_registry"
                type="text"
                v-model="formState.company_registry"
                :class="{
                  'p-invalid': v$.company_registry.$invalid && submitted,
                }"
              />
              <span v-if="v$.company_registry.$error && submitted">
                <span
                  id="name-error"
                  v-for="(error, index) of v$.company_registry.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
            </div>

            <div class="field col">
              <label
                for="tax_code"
                :class="{
                  'p-error': v$.tax_code.$invalid && submitted,
                }"
                >Tax Code*</label
              >
              <InputText
                id="tax_code"
                type="text"
                v-model="formState.tax_code"
                :class="{
                  'p-invalid': v$.tax_code.$invalid && submitted,
                }"
              />
              <span v-if="v$.tax_code.$error && submitted">
                <span
                  id="name-error"
                  v-for="(error, index) of v$.tax_code.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
            </div>
          </div>

          <div class="formgrid grid">
            <div class="field col">
              <label
                for="phone"
                :class="{
                  'p-error': v$.phone.$invalid && submitted,
                }"
                >Phone*</label
              >
              <InputText
                id="phone"
                type="text"
                v-model="formState.phone"
                :class="{
                  'p-invalid': v$.phone.$invalid && submitted,
                }"
              />
              <span v-if="v$.phone.$error && submitted">
                <span
                  id="name-error"
                  v-for="(error, index) of v$.phone.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
            </div>

            <div class="field col">
              <label
                for="email"
                :class="{
                  'p-error': v$.email.$invalid && submitted,
                }"
                >Email*</label
              >
              <InputText
                id="email"
                type="text"
                v-model="formState.email"
                :class="{
                  'p-invalid': v$.email.$invalid && submitted,
                }"
              />
              <span v-if="v$.email.$error && submitted">
                <span
                  id="name-error"
                  v-for="(error, index) of v$.email.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
            </div>
          </div>

          <div class="formgrid grid">
            <div class="field col">
              <label
                for="currency_id"
                :class="{
                  'p-error': v$.email.$invalid && submitted,
                }"
                >Currency*</label
              >
              <InputText
                id="currency_id"
                type="text"
                v-model="formState.currency_id"
                :class="{
                  'p-invalid': v$.currency_id.$invalid && submitted,
                }"
              />
              <span v-if="v$.currency_id.$error && submitted">
                <span
                  id="name-error"
                  v-for="(error, index) of v$.currency_id.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
            </div>

            <div class="field col">
              <label for="website">Website</label>
              <InputText id="website" type="text" v-model="formState.website" />
            </div>
          </div>

          <div class="field">
            <label>Address*</label>
            <InputText
              type="text"
              v-model="formState.address.address"
              :class="{
                'p-invalid': v$.address.address.$invalid && submitted,
              }"
            />
            <span v-if="v$.address.address.$error && submitted">
              <span
                id="name-error"
                v-for="(error, index) of v$.address.address.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
          </div>
          <div class="field">
            <InputText
              type="number"
              v-model="formState.address.province"
              :class="{
                'p-invalid': v$.address.province.$invalid && submitted,
              }"
            />
            <span v-if="v$.address.province.$error && submitted">
              <span
                id="name-error"
                v-for="(error, index) of v$.address.province.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
          </div>
          <div class="field">
            <InputText
              type="number"
              v-model="formState.address.district"
              :class="{
                'p-invalid': v$.address.district.$invalid && submitted,
              }"
            />
            <span v-if="v$.address.district.$error && submitted">
              <span
                id="name-error"
                v-for="(error, index) of v$.address.district.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
          </div>

          <div class="field">
            <InputText
              type="number"
              v-model="formState.address.ward"
              :class="{
                'p-invalid': v$.address.ward.$invalid && submitted,
              }"
            />
            <span v-if="v$.address.ward.$error && submitted">
              <span
                id="name-error"
                v-for="(error, index) of v$.address.ward.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
          </div>

          <div class="field">
            <label for="age1">Description</label>
            <Textarea
              v-model="formState.description"
              :autoResize="true"
              rows="5"
              cols="30"
            />
          </div>

          <div class="field">
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
