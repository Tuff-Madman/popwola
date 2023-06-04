import Transform from "./components/Transform";
import WidthHeight from "./components/WidthHeight";

const BasicCell = () => {
  return (
    <div className="group-wrapper mb-3 px-3 flex flex-col gap-3 pb-3 border-b border-secondary/10">
      <div className="flex items-center justify-between">
        <Transform />
      </div>
      <div className="flex items-center justify-between">
        <WidthHeight />
      </div>
    </div>
  );
};

export default BasicCell;