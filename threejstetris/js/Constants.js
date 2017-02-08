var constants = {
  CUBE_SIDE: 1,
  GRID_X: 5,
  GRID_Y: 10,
  GRID_Z: 5
};

var STATE = {
  EMPTY: 0,
  MOVING: 1,
  FROZEN: 2
}

var shapes = [
    [
        {x: 0, y: 0, z: 0},
        {x: 1, y: 0, z: 0},
        {x: 1, y: 1, z: 0},
        {x: 1, y: 2, z: 0}
    ],
    [
        {x: 0, y: 0, z: 0},
        {x: 0, y: 1, z: 0},
        {x: 0, y: 2, z: 0},
    ],
    [
        {x: 0, y: 0, z: 0},
        {x: 0, y: 1, z: 0},
        {x: 1, y: 0, z: 0},
        {x: 1, y: 1, z: 0}
    ],
    [
        {x: 0, y: 0, z: 0},
        {x: 0, y: 1, z: 0},
        {x: 0, y: 2, z: 0},
        {x: 1, y: 1, z: 0}
    ],
    [
        {x: 0, y: 0, z: 0},
        {x: 0, y: 1, z: 0},
        {x: 1, y: 1, z: 0},
        {x: 1, y: 2, z: 0}
    ]
];

var grid = new Array();
