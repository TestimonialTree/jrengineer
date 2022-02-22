// 1. implement double so that it doubles the elements in the array and outputs a comma separated list of the values
// 2. implement min to find the minimum value in the array
// 3. implement max to find the maximum value in the array
// 4. implement average to calculate the average of the numbers in the array
// 5. implement evens to only display a comma separated list of the even values in the array
// 6. add some white space to the left of each function output (i.e., doubled: , min: , etc. )
// 7. make the same heading of each line bold

export default function WorkingWithArrays ({input = []}) {
    
    function double () {
        return input;
    }

    function min () {
        return 0;
    }

    function max () {
        return 0;
    }

    function average () {
        return 0;
    }

    function median () {
        return 0;
    }

    function evens () {
        return input;
    }

    return (
        <div>
            <div>
                doubled: { double() }    
            </div>
            <div>
                min: { min() }
            </div>
            <div>
                max: { min() }
            </div>
            <div>
                average: { min() }
            </div>
            <div>
                median: { min() }
            </div>
            <div>
                evens: { evens() }
            </div>
        </div>
    )
}