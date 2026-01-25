/**
 * Table.js - 2D Table Data Management
 * This module manages a 2D array table with 0 and 1 values
 */

const Table = {
    /**
     * Create a new table with specified rows and columns
     * All cells initialized to 0
     * @param {number} rows - Number of rows
     * @param {number} cols - Number of columns
     * @returns {array} 2D array filled with zeros
     */
    create: function(rows, cols) {
        const table = [];
        for (let i = 0; i < rows; i++) {
            table[i] = [];
            for (let j = 0; j < cols; j++) {
                table[i][j] = 0;
            }
        }
        return table;
    },

    /**
     * Set value at specific position
     * @param {array} table - The 2D table
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @param {number} value - Value to set (0 or 1)
     */
    setValue: function(table, row, col, value) {
        if (row >= 0 && row < table.length && col >= 0 && col < table[0].length) {
            table[row][col] = value;
        }
    },

    /**
     * Get value at specific position
     * @param {array} table - The 2D table
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @returns {number} Value at the position (0 or 1)
     */
    getValue: function(table, row, col) {
        if (row >= 0 && row < table.length && col >= 0 && col < table[0].length) {
            return table[row][col];
        }
        return 0;
    },

    /**
     * Toggle value at specific position (0 -> 1, 1 -> 0)
     * @param {array} table - The 2D table
     * @param {number} row - Row index
     * @param {number} col - Column index
     */
    toggleValue: function(table, row, col) {
        if (row >= 0 && row < table.length && col >= 0 && col < table[0].length) {
            table[row][col] = table[row][col] === 0 ? 1 : 0;
        }
    },

    /**
     * Get a specific row
     * @param {array} table - The 2D table
     * @param {number} row - Row index
     * @returns {array} The row array
     */
    getRow: function(table, row) {
        if (row >= 0 && row < table.length) {
            return table[row];
        }
        return [];
    },

    /**
     * Get a specific column
     * @param {array} table - The 2D table
     * @param {number} col - Column index
     * @returns {array} The column array
     */
    getColumn: function(table, col) {
        const column = [];
        for (let i = 0; i < table.length; i++) {
            if (col >= 0 && col < table[i].length) {
                column.push(table[i][col]);
            }
        }
        return column;
    },

    /**
     * Get all neighbors of a cell (8 surrounding cells)
     * @param {array} table - The 2D table
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @returns {array} Array of neighbor values
     */
    getNeighbors: function(table, row, col) {
        const neighbors = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                neighbors.push(this.getValue(table, row + i, col + j));
            }
        }
        return neighbors;
    },

    /**
     * Count alive neighbors (1s)
     * @param {array} table - The 2D table
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @returns {number} Count of alive neighbors
     */
    countAliveNeighbors: function(table, row, col) {
        const neighbors = this.getNeighbors(table, row, col);
        return neighbors.filter(n => n === 1).length;
    },

    /**
     * Print the table to console
     * @param {array} table - The 2D table
     */
    print: function(table) {
        console.table(table);
    },

    /**
     * Convert table to string representation
     * @param {array} table - The 2D table
     * @returns {string} String representation of the table
     */
    toString: function(table) {
        return table.map(row => row.join('')).join('\n');
    }
};
