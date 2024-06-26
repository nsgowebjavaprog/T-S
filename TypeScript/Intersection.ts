
type Draggable = {
    drag: () => void
;

};

type Resizeable = {
    resize:() => void
};

type UIWidget = Draggable & Resizeable;

let textBox = UIWidget = {
    drag: () => {}
    resize: () => {}
}