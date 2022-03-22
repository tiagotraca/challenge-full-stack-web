import { createLocalVue, mount } from "@vue/test-utils";
import SnackBar from "@/components/SnackBar.vue";
import Vuetify from "vuetify";

const localVue = createLocalVue();
describe("SnackBar.vue", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("should have a custom title and match snapshot", () => {
    const wrapper = mount(SnackBar, {
      localVue,
      vuetify,
    });
    const title = wrapper.getComponent(".v-snack__content");
    expect(title.text()).toBe("My timeout is set to 2000.");

    expect(wrapper.html()).toMatchSnapshot();
  });
});
