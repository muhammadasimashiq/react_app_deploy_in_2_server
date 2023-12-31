import React from "react";
import areEqual from "deep-equal";
const useSelection = (editor) => {
  const [selection, setSelection] = React.useState(editor.selection);
  const previousSelection = React.useRef(null);
  const setSelectionOptimized = React.useCallback(
    (newSelection) => {
      if (areEqual(selection, newSelection)) {
        return;
      }
      previousSelection.current = selection;
      setSelection(newSelection);
    },
    [setSelection, selection]
  );

  return [previousSelection.current, selection, setSelectionOptimized];
};
export default useSelection;
