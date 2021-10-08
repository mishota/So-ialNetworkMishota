import React from "react";
import { create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusComponent", () => {
   test("Status from props should be in state", () => {
      const component = create(<ProfileStatus status="Mishotik" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("Mishotik");
   })
   test("After creation span should be displayed with correct status", () => {
      const component = create(<ProfileStatus status="Mishotik" />);
      const root = component.root;
      let span = root.findByType("span");
      expect(span).not.toBeNull();
   })
   test("After creation input should not be displayed", () => {
      const component = create(<ProfileStatus status="Mishotik" />);
      const root = component.root;
      expect(() => {
         root.findByType("input")
      }).toThrow();
   })
   test("Text in span should be equal to status", () => {
      const component = create(<ProfileStatus status="Mishotik" />);
      const root = component.root;
      let span = root.findByType("span");
      expect(span.children[0]).toBe("Mishotik");
   })
   test("Input should be displayed in edit mode after doubleclick", () => {
      const component = create(<ProfileStatus status="Mishotik" />);
      const root = component.root;
      let span = root.findByType("span");
      span.props.onDoubleClick();
      let input = root.findByType("input");
      expect(input.props.value).toBe("Mishotik");
   })
   test("Callback should be called", () => {
      const mochCallback = jest.fn();
      const component = create(<ProfileStatus status="Mishotik"
         updateStatus={mochCallback} />);
      const instance = component.getInstance();
      instance.deActivateEditMode();
      expect(mochCallback.mock.calls.length).toBe(1);
   })
})



