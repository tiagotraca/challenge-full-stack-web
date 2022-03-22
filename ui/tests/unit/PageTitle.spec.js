import { shallowMount } from "@vue/test-utils";
import PageTitle from "@/components/PageTitle.vue";

describe("PageTitle.vue", () => {
  it("renders props.msg when passed", () => {
    const title = "test title";
    const wrapper = shallowMount(PageTitle, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
