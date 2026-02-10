// LUMEN TRACER - Complete CAPS Mathematics Curriculum Data
// All 5 Domains: Numbers, Patterns, Space & Shape, Measurement, Data Handling
// Grade R to Grade 9 - Atomized Micro-Skills

const atomizedNodes = [
    // ═══════════════════════════════════════════════════════════════════════════
    // DOMAIN 1: NUMBERS, OPERATIONS & RELATIONSHIPS
    // ═══════════════════════════════════════════════════════════════════════════
    
    // Grade R
    { id: 'NR_1TO1', label: '1-to-1 Counting', domain: 'Numbers', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Cardinality principle', 'Touch-count objects', 'Stable order counting', 'Last number = total'],
      action: "Move-and-count games with physical objects between containers." },
    
    { id: 'NR_RECOG', label: 'Number Recognition\n(1-10)', domain: 'Numbers', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Recognize numerals 1-10', 'Match numeral to quantity', 'Trace and write numerals'],
      action: "Sandpaper numerals, playdough numbers, numeral hunts." },
    
    { id: 'NR_COMPARE', label: 'Compare Quantities', domain: 'Numbers', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['More than / Less than', 'Same as / Equal', 'Order by quantity'],
      action: "Stacking towers and comparing heights, sharing activities." },

    // Grade 1
    { id: 'N1_BONDS10', label: 'Number Bonds\nto 10', domain: 'Numbers', phase: 'Found', color: '#3fb950', level: 2,
      skills: ['Part-part-whole relationships', 'Complements to 10', 'Mental addition strategies', 'Fact families'],
      action: "Ten Frames, part-part-whole mats, bead strings." },
    
    { id: 'N1_ADDSUBT', label: 'Addition &\nSubtraction', domain: 'Numbers', phase: 'Found', color: '#3fb950', level: 2,
      skills: ['Counting on/back', 'Using number line', 'Story problems', 'Recording number sentences'],
      action: "Concrete counters before abstract symbols." },

    // Grade 2
    { id: 'N2_BONDS20', label: 'Number Bonds\nto 20', domain: 'Numbers', phase: 'Found', color: '#3fb950', level: 3,
      skills: ['Bridging through 10', 'Near doubles strategy', 'Mental subtraction', 'Quick recall'],
      action: "Double ten frames, bead strings of 20." },
    
    { id: 'N2_PLACE', label: 'Place Value\n(Tens & Units)', domain: 'Numbers', phase: 'Found', color: '#3fb950', level: 3,
      skills: ['Bundling into tens', 'Expanded notation', 'Representing 2-digit numbers', 'Value vs digit'],
      action: "Dienes/base-10 blocks, place value charts, arrow cards." },

    // Grade 3
    { id: 'N3_TIMES', label: 'Multiplication\nTables', domain: 'Numbers', phase: 'Found', color: '#3fb950', level: 4,
      skills: ['Skip counting patterns', '2x, 5x, 10x, 3x, 4x tables', 'Array representations', 'Commutativity'],
      action: "Array cards, repeated addition links, times table songs." },
    
    { id: 'N3_SHARING', label: 'Division as\nSharing', domain: 'Numbers', phase: 'Found', color: '#3fb950', level: 4,
      skills: ['Equal sharing', 'Grouping', 'Remainders concept', 'Inverse of multiplication'],
      action: "Physically sharing objects, grouping games." },

    // Grade 4
    { id: 'N4_DIV', label: 'Long Division', domain: 'Numbers', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Estimation quotients', 'Subtraction regrouping', 'Recording algorithm', 'Checking with multiplication'],
      action: "List multiples on margin, use place value understanding." },
    
    { id: 'N4_FRAC', label: 'Fractions', domain: 'Numbers', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Equal parts of whole', 'Numerator/Denominator meaning', 'Equivalent fractions', 'Comparing fractions'],
      action: "Fraction circles, paper folding, fraction walls." },
    
    { id: 'N4_FACTOR', label: 'Factors &\nMultiples', domain: 'Numbers', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Factor pairs', 'Prime numbers', 'Common factors', 'LCM basics'],
      action: "Factor rainbows, Sieve of Eratosthenes." },

    // Grade 5
    { id: 'N5_DECIMAL', label: 'Decimals', domain: 'Numbers', phase: 'Inter', color: '#d29922', level: 6,
      skills: ['Tenths and hundredths', 'Decimal place value', 'Fraction-decimal conversion', 'Ordering decimals'],
      action: "Link to money (Rand.cents), 100-grids, decimal place value charts." },
    
    { id: 'N5_FRACOP', label: 'Fraction\nOperations', domain: 'Numbers', phase: 'Inter', color: '#d29922', level: 6,
      skills: ['Add/subtract like denominators', 'Unlike denominators introduction', 'Mixed numbers', 'Fraction of quantity'],
      action: "Fraction strips for visual addition/subtraction." },

    // Grade 6
    { id: 'N6_PERCENT', label: 'Percentages', domain: 'Numbers', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['Percent = per 100', 'Fraction-decimal-percent conversion', 'Finding % of amount', 'Discount/increase'],
      action: "100-grids, real-world discounts, sales tax examples." },
    
    { id: 'N6_RATIO', label: 'Ratio & Rate', domain: 'Numbers', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['Part-to-part comparison', 'Equivalent ratios', 'Unit rate', 'Proportion problems'],
      action: "Recipe scaling, map scales, speed calculations." },

    // Grade 7
    { id: 'N7_INTEGER', label: 'Integers', domain: 'Numbers', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['Number line with negatives', 'Adding integers', 'Subtracting integers', 'Multiplying/dividing integers'],
      action: "Vertical number lines (temperature, lifts), two-color counters." },
    
    { id: 'N7_COMMON', label: 'Common Fractions\nAdvanced', domain: 'Numbers', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['All four operations', 'Converting to decimals', 'Ordering rational numbers', 'Problem solving'],
      action: "Real-world contexts, visual models." },

    // Grade 8
    { id: 'N8_EXPONENT', label: 'Exponents', domain: 'Numbers', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Base and index', 'Laws of exponents', 'Negative exponents', 'Scientific notation'],
      action: "Link to repeated multiplication, powers of 10." },
    
    { id: 'N8_RATIONAL', label: 'Rational Numbers', domain: 'Numbers', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Representing on number line', 'Operations with rationals', 'Terminating vs recurring decimals'],
      action: "Number line placements, calculator explorations." },

    // Grade 9
    { id: 'N9_FACTOR', label: 'Factoring\nTrinomials', domain: 'Numbers', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Finding factors of c', 'Sum to coefficient b', 'FOIL reversal', 'Difference of squares'],
      action: "Algebra tiles, area model, factor puzzles." },

    // ═══════════════════════════════════════════════════════════════════════════
    // DOMAIN 2: PATTERNS, FUNCTIONS & ALGEBRA
    // ═══════════════════════════════════════════════════════════════════════════
    
    // Grade R
    { id: 'PR_COPY', label: 'Copy & Extend\nPatterns', domain: 'Patterns', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Identify repeating unit', 'Copy AB, ABB patterns', 'Extend simple sequences', 'Create own patterns'],
      action: "Beads, shapes, body percussion, clapping patterns." },

    // Grade 1
    { id: 'P1_CREATE', label: 'Create Own\nPatterns', domain: 'Patterns', phase: 'Found', color: '#3fb950', level: 2,
      skills: ['ABB, AAB, ABC patterns', 'Describe the rule verbally', 'Identify pattern errors', 'Physical patterns'],
      action: "Pattern blocks, stamps, linking cubes." },

    // Grade 2
    { id: 'P2_NUMBER', label: 'Number Patterns', domain: 'Patterns', phase: 'Found', color: '#3fb950', level: 3,
      skills: ['Skip counting sequences', '+2, +5, +10 patterns', 'Finding missing terms', 'Describing rules'],
      action: "Number lines, 100-charts, counting songs." },

    // Grade 3
    { id: 'P3_GEOMETRIC', label: 'Geometric\nPatterns', domain: 'Patterns', phase: 'Found', color: '#3fb950', level: 4,
      skills: ['Growing patterns', 'Shrinking patterns', 'Pattern tables', 'Predicting next terms'],
      action: "Matchstick patterns, tile patterns, drawings." },

    // Grade 4
    { id: 'P4_INOUT', label: 'Input-Output\nTables', domain: 'Patterns', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Function machines concept', 'Finding the rule', 'Completing tables', 'Multiple operations'],
      action: "Physical function boxes with cards, guess my rule games." },

    // Grade 5
    { id: 'P5_VARIABLE', label: 'Variables &\nExpressions', domain: 'Patterns', phase: 'Inter', color: '#d29922', level: 6,
      skills: ['Letter symbols for unknowns', 'Substitution', 'Writing expressions', 'Evaluating expressions'],
      action: "Algebra tiles, balance activities, envelope game." },

    // Grade 6
    { id: 'P6_EQUATION', label: 'Simple Equations', domain: 'Patterns', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['Balancing equations', 'Solving one-step equations', 'Checking solutions', 'Word problem to equation'],
      action: "Balance scale model, cover-up method." },

    // Grade 7
    { id: 'P7_LINEAR', label: 'Linear\nRelationships', domain: 'Patterns', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['Graphing on Cartesian plane', 'Table-to-graph conversion', 'y = mx + c concept', 'Interpreting gradient'],
      action: "Real-world linear contexts (distance-time, cost)." },
    
    { id: 'P7_FUNCTION', label: 'Functions &\nRelationships', domain: 'Patterns', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['Input-output with formulas', 'Equivalent representations', 'Flow diagrams', 'Number sentences'],
      action: "Multiple representation activities." },

    // Grade 8
    { id: 'P8_SOLVE', label: 'Solving Equations', domain: 'Patterns', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Multi-step equations', 'Equations with brackets', 'Equations with fractions', 'Laws of exponents in equations'],
      action: "Systematic solution methods, checking answers." },
    
    { id: 'P8_EXPRESS', label: 'Algebraic\nExpressions', domain: 'Patterns', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Expand brackets', 'Simplify like terms', 'Multiply polynomials', 'Divide by monomials'],
      action: "Algebra tiles for expanding, area model." },

    // Grade 9
    { id: 'P9_SIMULT', label: 'Simultaneous\nEquations', domain: 'Patterns', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Substitution method', 'Elimination method', 'Graphical solution', 'Word problem applications'],
      action: "Start with simple integer solutions, graph intersections." },
    
    { id: 'P9_FACTORISE', label: 'Factorising\nExpressions', domain: 'Patterns', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Common factor', 'Difference of squares', 'Trinomial factorisation', 'Grouping'],
      action: "Reverse of expanding, algebra tiles." },
    
    { id: 'P9_GRAPHS', label: 'Linear Graphs', domain: 'Patterns', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['x and y intercepts', 'Gradient from equation', 'Equations from graphs', 'Parallel/perpendicular lines'],
      action: "GeoGebra explorations, real-world contexts." },

    // ═══════════════════════════════════════════════════════════════════════════
    // DOMAIN 3: SPACE & SHAPE (GEOMETRY) - Your existing + additions
    // ═══════════════════════════════════════════════════════════════════════════
    
    // Grade R
    { id: 'SR_DIR', label: 'Following\nDirections', domain: 'Space', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Movement instructions', 'Identifying shapes in environment', 'Tracing paths', 'Basic orientation'],
      action: "Gross motor movement paths on the floor, obstacle courses." },
    
    { id: 'SR_VIEW', label: 'Viewing Objects', domain: 'Space', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Front, side, top view', 'Match 3D to 2D outline', 'Puzzle completion', 'Building with blocks'],
      action: "Building with blocks and drawing from different sides." },
    
    { id: 'SR_SHAPE', label: 'Recognise 3D\nObjects', domain: 'Space', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Ball, box, cone shapes', 'Describe attributes', 'Sort by shape', 'Find in environment'],
      action: "Shape hunts, feely bags, sorting activities." },

    // Grade 1
    { id: 'S1_POSITION', label: 'Position &\nDirection', domain: 'Space', phase: 'Found', color: '#3fb950', level: 2,
      skills: ['Left, right, behind, in-front', 'Multi-step paths', 'Mapping classroom', 'Relative position'],
      action: "Simon Says, scavenger hunts, classroom maps." },
    
    { id: 'S1_2DSHAPE', label: '2D Shape\nRecognition', domain: 'Space', phase: 'Found', color: '#3fb950', level: 2,
      skills: ['Circle, triangle, square, rectangle', 'Sides and corners', 'Sort by attributes', 'Find in environment'],
      action: "Shape hunts, attribute block sorting." },

    // Grade 2
    { id: 'S2_PROPERTY', label: '2D Shape\nProperties', domain: 'Space', phase: 'Found', color: '#3fb950', level: 3,
      skills: ['Count sides and vertices', 'Describe shapes', 'Compare shapes', 'Right angles awareness'],
      action: "Geoboards, shape comparison activities." },

    // Grade 3
    { id: 'S3_3DPROP', label: '2D vs 3D\nProperties', domain: 'Space', phase: 'Found', color: '#3fb950', level: 4,
      skills: ['Faces, edges, vertices', 'Prisms vs pyramids', 'Polygon identification', 'Nets of 3D shapes'],
      action: "Tactile sorting, building 3D shapes, unfolding boxes." },

    // Grade 4
    { id: 'S4_SYMM', label: 'Symmetry', domain: 'Space', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Lines of symmetry', 'Reflectional symmetry', 'Creating symmetric patterns', 'Symmetry in nature'],
      action: "Paper folding, mirror activities, pattern creation." },
    
    { id: 'S4_GRID', label: 'Grid Coordinates', domain: 'Space', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Reading grid maps', 'Locating positions', 'Giving directions', 'Simple coordinates'],
      action: "Battleship games, treasure maps." },

    // Grade 5
    { id: 'S5_VIEWS', label: 'Views of\nObjects', domain: 'Space', phase: 'Inter', color: '#d29922', level: 6,
      skills: ['Top, front, side views', 'Drawing views', 'Matching views to objects', 'Isometric awareness'],
      action: "Building models and drawing perspectives, multilink cubes." },

    // Grade 6
    { id: 'S6_ANGLES', label: 'Angle\nMeasurement', domain: 'Space', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['Using protractor', 'Degrees in triangle/circle', 'Acute, Obtuse, Reflex', 'Estimating angles'],
      action: "Protractor practice, angle estimation games." },
    
    { id: 'S6_CLASSIFY', label: 'Classifying\nTriangles', domain: 'Space', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['By angles (acute, right, obtuse)', 'By sides (equilateral, isosceles, scalene)', 'Properties of each'],
      action: "Triangle sorting, construction activities." },

    // Grade 7
    { id: 'S7_COORD', label: 'Coordinate\nSystem', domain: 'Space', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['Plotting (x,y) points', 'All four quadrants', 'Grid map reading', 'Ordered pairs'],
      action: "Coordinate picture activities, Battleship extended." },
    
    { id: 'S7_TRANS', label: 'Transformation\nBasics', domain: 'Space', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['Reflection basics', 'Translation basics', 'Rotation basics', 'Describing movements'],
      action: "Tracing paper, mirrors, coordinate grid transformations." },

    // Grade 8
    { id: 'S8_CONSTR', label: 'Geometric\nConstructions', domain: 'Space', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Bisecting angles', 'Perpendicular lines', 'Constructing triangles', 'Using compass'],
      action: "Compass and straight-edge practice, step-by-step guides." },
    
    { id: 'S8_PYTHAG', label: 'Theorem of\nPythagoras', domain: 'Space', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['a² + b² = c² relationship', 'Finding hypotenuse', 'Finding shorter side', 'Identifying right triangles'],
      action: "Square tile proofs, real-world applications." },
    
    { id: 'S8_LINES', label: 'Geometry of\nStraight Lines', domain: 'Space', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Parallel lines cut by transversal', 'Corresponding angles', 'Alternate angles', 'Co-interior angles'],
      action: "Dynamic geometry software, angle measuring activities." },

    // Grade 9
    { id: 'S9_TRANS', label: 'Transformational\nGeometry', domain: 'Space', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Reflection across axes', 'Rotation around origin', 'Translation vectors', 'Enlargement/reduction factors'],
      action: "Coordinate transformations, GeoGebra explorations." },
    
    { id: 'S9_PROOF', label: 'Geometric\nProofs', domain: 'Space', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Similarity vs Congruency', 'Proving triangle congruence', 'Angle relationships', 'Logical reasoning'],
      action: "Structured proof writing, two-column proofs." },
    
    { id: 'S9_SIMILAR', label: 'Similar &\nCongruent', domain: 'Space', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Conditions for congruence', 'Conditions for similarity', 'Using properties in problems', 'Scale factor'],
      action: "Hands-on comparisons, problem-solving applications." },

    // ═══════════════════════════════════════════════════════════════════════════
    // DOMAIN 4: MEASUREMENT
    // ═══════════════════════════════════════════════════════════════════════════
    
    // Grade R
    { id: 'MR_COMPARE', label: 'Compare Size', domain: 'Measurement', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Long/Short', 'Heavy/Light', 'Full/Empty', 'Big/Small'],
      action: "Direct comparison with objects, ordering activities." },
    
    { id: 'MR_TIME', label: 'Time Awareness', domain: 'Measurement', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Morning/Afternoon/Night', 'Before/After', 'Days of week', 'Daily routines'],
      action: "Daily routine charts, sequence activities." },

    // Grade 1
    { id: 'M1_NONSTAND', label: 'Non-Standard\nUnits', domain: 'Measurement', phase: 'Found', color: '#3fb950', level: 2,
      skills: ['Measure with hands, steps, cubes', 'Need for standard units', 'Estimate lengths', 'Compare measurements'],
      action: "Body-part measuring, footprint measuring." },
    
    { id: 'M1_CLOCK', label: 'Time Concepts', domain: 'Measurement', phase: 'Found', color: '#3fb950', level: 2,
      skills: ['Hours in a day', 'Days in a week', 'Months and seasons', 'Yesterday/Today/Tomorrow'],
      action: "Daily calendars, weather charts." },

    // Grade 2
    { id: 'M2_LENGTH', label: 'Standard Length\nUnits', domain: 'Measurement', phase: 'Found', color: '#3fb950', level: 3,
      skills: ['Centimeters', 'Meters', 'Using a ruler', 'Estimating before measuring'],
      action: "Practical measuring activities around classroom." },
    
    { id: 'M2_TIME', label: 'Telling Time', domain: 'Measurement', phase: 'Found', color: '#3fb950', level: 3,
      skills: ['Hour hand reading', "O'clock and half past", 'Quarter past/to', 'Analog clock reading'],
      action: "Geared teaching clocks, daily time practice." },
    
    { id: 'M2_MONEY', label: 'Money', domain: 'Measurement', phase: 'Found', color: '#3fb950', level: 3,
      skills: ['Recognise coins and notes', 'Value of money', 'Simple totals', 'Giving change'],
      action: "Shop play, coin sorting and counting." },

    // Grade 3
    { id: 'M3_MASS', label: 'Mass\n(Kilograms)', domain: 'Measurement', phase: 'Found', color: '#3fb950', level: 4,
      skills: ['Grams and kilograms', 'Using a scale', 'Estimating mass', 'Comparing masses'],
      action: "Balance scales with standard masses." },
    
    { id: 'M3_CAPACITY', label: 'Capacity\n(Litres)', domain: 'Measurement', phase: 'Found', color: '#3fb950', level: 4,
      skills: ['Millilitres and litres', 'Using measuring jugs', 'Estimating capacity', 'Comparing capacities'],
      action: "Water play with containers, cooking activities." },
    
    { id: 'M3_TIMEADV', label: 'Time\n(Minutes)', domain: 'Measurement', phase: 'Found', color: '#3fb950', level: 4,
      skills: ['5-minute intervals', 'Reading all times', 'Duration in hours', 'Elapsed time'],
      action: "Timeline activities, schedule reading." },

    // Grade 4
    { id: 'M4_CONVERT', label: 'Unit\nConversions', domain: 'Measurement', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['mm ↔ cm ↔ m', 'g ↔ kg', 'ml ↔ l', 'Conversion calculations'],
      action: "Conversion charts, practical conversion tasks." },
    
    { id: 'M4_PERIM', label: 'Perimeter', domain: 'Measurement', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Adding all sides', 'Perimeter of rectangles', 'Formula P = 2(l+w)', 'Finding missing sides'],
      action: "Walking around shapes, string measuring." },
    
    { id: 'M4_TIMEELAP', label: 'Elapsed Time', domain: 'Measurement', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Calculate durations', 'Reading timetables', 'Adding hours/minutes', 'Timeline problems'],
      action: "Schedule analysis, journey planning." },

    // Grade 5
    { id: 'M5_AREA', label: 'Area\n(Squares)', domain: 'Measurement', phase: 'Inter', color: '#d29922', level: 6,
      skills: ['Counting square units', 'Area = l × w', 'Relationship to perimeter', 'Square centimeters/meters'],
      action: "Grid paper activities, tiling floors." },
    
    { id: 'M5_TIME24', label: '24-Hour Time', domain: 'Measurement', phase: 'Inter', color: '#d29922', level: 6,
      skills: ['24-hour clock notation', 'Converting 12h to 24h', 'Duration calculations', 'Timetable reading'],
      action: "Digital clock comparisons, international time." },
    
    { id: 'M5_TEMP', label: 'Temperature', domain: 'Measurement', phase: 'Inter', color: '#d29922', level: 6,
      skills: ['Reading thermometers', 'Degrees Celsius', 'Comparing temperatures', 'Negative temperatures'],
      action: "Weather recording, thermometer reading." },

    // Grade 6
    { id: 'M6_AREATRI', label: 'Area of\nTriangles', domain: 'Measurement', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['Base and height identification', 'A = ½bh formula', 'Composite shapes', 'Area problem solving'],
      action: "Cut rectangles diagonally, derive formula visually." },
    
    { id: 'M6_CONVERT', label: 'Advanced\nConversions', domain: 'Measurement', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['Converting between all units', 'Area unit conversions', 'Multi-step conversions'],
      action: "Real-world conversion problems." },

    // Grade 7
    { id: 'M7_CIRCUM', label: 'Circumference\n& Pi', domain: 'Measurement', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['Pi as a ratio', 'C = πd formula', 'C = 2πr formula', 'Diameter vs radius'],
      action: "Measure circular objects with string, derive pi." },
    
    { id: 'M7_AREACIRCLE', label: 'Area of\nCircles', domain: 'Measurement', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['A = πr² formula', 'Using radius', 'Finding radius from area', 'Composite shapes with circles'],
      action: "Circle sector rearrangement to show formula." },

    // Grade 8
    { id: 'M8_VOLUME', label: 'Volume of\nPrisms', domain: 'Measurement', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['V = l × w × h', 'V = Area of base × height', 'Cubic units', 'Capacity-volume relationship'],
      action: "Building with unit cubes, water displacement." },
    
    { id: 'M8_SURFACE', label: 'Surface Area\nBasics', domain: 'Measurement', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Nets of prisms', 'Calculating surface area', 'Adding face areas', 'Real-world applications'],
      action: "Unfolding boxes, wrapping paper problems." },

    // Grade 9
    { id: 'M9_VOLCY', label: 'Volume of\nCylinders', domain: 'Measurement', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['V = πr²h formula', 'Finding radius/height', 'Cylinder problems', 'Capacity calculations'],
      action: "Cylinder comparisons, water volume experiments." },
    
    { id: 'M9_SURFADV', label: 'Surface Area\nAdvanced', domain: 'Measurement', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Surface area of cylinders', 'Composite 3D shapes', 'Problem solving', 'Optimization problems'],
      action: "Design problems, packaging calculations." },

    // ═══════════════════════════════════════════════════════════════════════════
    // DOMAIN 5: DATA HANDLING
    // ═══════════════════════════════════════════════════════════════════════════
    
    // Grade R
    { id: 'DR_SORT', label: 'Sort &\nClassify', domain: 'Data', phase: 'R', color: '#bc8cff', level: 1,
      skills: ['Sorting by attribute', 'Describing categories', 'Counting in groups', 'Same and different'],
      action: "Sorting toys, buttons, shapes by color/size/type." },

    // Grade 1
    { id: 'D1_COLLECT', label: 'Collect &\nRepresent', domain: 'Data', phase: 'Found', color: '#3fb950', level: 2,
      skills: ['Asking questions', 'Recording answers', 'Object graphs', 'Comparing groups'],
      action: "Class surveys with physical objects, people graphs." },

    // Grade 2
    { id: 'D2_PICTOGRAPH', label: 'Pictographs', domain: 'Data', phase: 'Found', color: '#3fb950', level: 3,
      skills: ['Drawing pictographs', 'Reading pictographs', 'Answering questions from data', 'One-to-one symbols'],
      action: "Sticker charts, picture surveys." },

    // Grade 3
    { id: 'D3_TALLY', label: 'Tally Charts', domain: 'Data', phase: 'Found', color: '#3fb950', level: 4,
      skills: ['Tally marks (bundling 5s)', 'Frequency tables', 'Converting to numbers', 'Organizing data'],
      action: "Class votes, traffic counting, weather tallies." },

    // Grade 4
    { id: 'D4_BARGRAPH', label: 'Bar Graphs', domain: 'Data', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Drawing bar graphs', 'Reading scales', 'Interpreting data', 'Answering questions'],
      action: "Graph paper activities, data collection projects." },
    
    { id: 'D4_QUESTIONS', label: 'Data Questions', domain: 'Data', phase: 'Inter', color: '#d29922', level: 5,
      skills: ['Formulating questions', 'Choosing data sources', 'Identifying bias', 'Drawing conclusions'],
      action: "Survey design, data critique activities." },

    // Grade 5
    { id: 'D5_MODE', label: 'Mode &\nMedian', domain: 'Data', phase: 'Inter', color: '#d29922', level: 6,
      skills: ['Finding mode', 'Finding median', 'Organizing data sets', 'Comparing datasets'],
      action: "Card sorting, number ordering, human number lines." },

    // Grade 6
    { id: 'D6_MEAN', label: 'Mean\n(Average)', domain: 'Data', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['Calculating mean', 'Sum ÷ count', 'Comparing averages', 'Choosing appropriate average'],
      action: "Leveling cubes, real-world average problems." },
    
    { id: 'D6_PIE', label: 'Pie Charts', domain: 'Data', phase: 'Inter', color: '#d29922', level: 7,
      skills: ['Reading pie charts', 'Fractions of whole', 'Comparing sectors', 'Percent in pie charts'],
      action: "Circle fraction activities, human pie charts." },

    // Grade 7
    { id: 'D7_PROB', label: 'Basic\nProbability', domain: 'Data', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['Certain, likely, unlikely, impossible', 'Experimental probability', 'Probability as fraction', 'Predicting outcomes'],
      action: "Dice and coin experiments, spinner activities." },
    
    { id: 'D7_SUMMARY', label: 'Summarising\nData', domain: 'Data', phase: 'Senior', color: '#f78166', level: 8,
      skills: ['All three averages', 'Range', 'Choosing representations', 'Data interpretation'],
      action: "Statistical investigation projects." },

    // Grade 8
    { id: 'D8_RANGE', label: 'Range &\nOutliers', domain: 'Data', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Calculating range', 'Identifying outliers', 'Effect on mean/median', 'Data spread'],
      action: "Analyzing real datasets, class data investigations." },
    
    { id: 'D8_PROBADV', label: 'Probability\nAdvanced', domain: 'Data', phase: 'Senior', color: '#f78166', level: 9,
      skills: ['Relative frequency', 'Probability scale 0-1', 'Comparing experimental/theoretical', 'Tree diagrams intro'],
      action: "Extended experiments, comparing predictions." },

    // Grade 9
    { id: 'D9_HISTO', label: 'Histograms', domain: 'Data', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Grouped data', 'Class intervals', 'Drawing histograms', 'Bar graph vs histogram'],
      action: "Large dataset analysis, comparing graph types." },
    
    { id: 'D9_SCATTER', label: 'Scatter Plots', domain: 'Data', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Plotting bivariate data', 'Identifying correlation', 'Positive/negative/no correlation', 'Line of best fit'],
      action: "Real-world data investigations, correlation explorations." },
    
    { id: 'D9_INTERPRET', label: 'Data\nInterpretation', domain: 'Data', phase: 'Senior', color: '#f78166', level: 10,
      skills: ['Critical analysis', 'Misleading statistics', 'Drawing conclusions', 'Communicating findings'],
      action: "Media analysis, detecting bias in graphs." }
];

// ═══════════════════════════════════════════════════════════════════════════
// EDGES - Prerequisite Connections
// ═══════════════════════════════════════════════════════════════════════════

const atomizedEdges = [
    // ─────────────────────────────────────────────────────────────────────────
    // NUMBERS, OPERATIONS & RELATIONSHIPS
    // ─────────────────────────────────────────────────────────────────────────
    { from: 'NR_1TO1', to: 'NR_RECOG' },
    { from: 'NR_1TO1', to: 'NR_COMPARE' },
    { from: 'NR_RECOG', to: 'N1_BONDS10' },
    { from: 'NR_COMPARE', to: 'N1_BONDS10' },
    { from: 'N1_BONDS10', to: 'N1_ADDSUBT' },
    { from: 'N1_ADDSUBT', to: 'N2_BONDS20' },
    { from: 'N2_BONDS20', to: 'N2_PLACE' },
    { from: 'N2_PLACE', to: 'N3_TIMES' },
    { from: 'N3_TIMES', to: 'N3_SHARING' },
    { from: 'N3_SHARING', to: 'N4_DIV' },
    { from: 'N3_TIMES', to: 'N4_FACTOR' },
    { from: 'N4_FACTOR', to: 'N4_FRAC' },
    { from: 'N4_FRAC', to: 'N5_DECIMAL' },
    { from: 'N4_FRAC', to: 'N5_FRACOP' },
    { from: 'N5_DECIMAL', to: 'N6_PERCENT' },
    { from: 'N5_FRACOP', to: 'N6_RATIO' },
    { from: 'N2_PLACE', to: 'N7_INTEGER' },
    { from: 'N6_PERCENT', to: 'N7_COMMON' },
    { from: 'N3_TIMES', to: 'N8_EXPONENT' },
    { from: 'N7_INTEGER', to: 'N8_RATIONAL' },
    { from: 'N4_FACTOR', to: 'N9_FACTOR' },
    { from: 'N8_EXPONENT', to: 'N9_FACTOR' },

    // ─────────────────────────────────────────────────────────────────────────
    // PATTERNS, FUNCTIONS & ALGEBRA
    // ─────────────────────────────────────────────────────────────────────────
    { from: 'PR_COPY', to: 'P1_CREATE' },
    { from: 'P1_CREATE', to: 'P2_NUMBER' },
    { from: 'P2_NUMBER', to: 'P3_GEOMETRIC' },
    { from: 'P3_GEOMETRIC', to: 'P4_INOUT' },
    { from: 'P4_INOUT', to: 'P5_VARIABLE' },
    { from: 'P5_VARIABLE', to: 'P6_EQUATION' },
    { from: 'P6_EQUATION', to: 'P7_LINEAR' },
    { from: 'P6_EQUATION', to: 'P7_FUNCTION' },
    { from: 'P7_LINEAR', to: 'P8_SOLVE' },
    { from: 'P5_VARIABLE', to: 'P8_EXPRESS' },
    { from: 'P8_SOLVE', to: 'P9_SIMULT' },
    { from: 'P8_EXPRESS', to: 'P9_FACTORISE' },
    { from: 'P7_LINEAR', to: 'P9_GRAPHS' },

    // ─────────────────────────────────────────────────────────────────────────
    // SPACE & SHAPE
    // ─────────────────────────────────────────────────────────────────────────
    { from: 'SR_DIR', to: 'S1_POSITION' },
    { from: 'SR_VIEW', to: 'SR_SHAPE' },
    { from: 'SR_SHAPE', to: 'S1_2DSHAPE' },
    { from: 'S1_POSITION', to: 'S1_2DSHAPE' },
    { from: 'S1_2DSHAPE', to: 'S2_PROPERTY' },
    { from: 'S2_PROPERTY', to: 'S3_3DPROP' },
    { from: 'S3_3DPROP', to: 'S4_SYMM' },
    { from: 'S1_POSITION', to: 'S4_GRID' },
    { from: 'S4_SYMM', to: 'S5_VIEWS' },
    { from: 'S3_3DPROP', to: 'S6_ANGLES' },
    { from: 'S6_ANGLES', to: 'S6_CLASSIFY' },
    { from: 'S4_GRID', to: 'S7_COORD' },
    { from: 'S4_SYMM', to: 'S7_TRANS' },
    { from: 'S7_COORD', to: 'S7_TRANS' },
    { from: 'S6_ANGLES', to: 'S8_CONSTR' },
    { from: 'S6_ANGLES', to: 'S8_PYTHAG' },
    { from: 'S6_ANGLES', to: 'S8_LINES' },
    { from: 'S7_TRANS', to: 'S9_TRANS' },
    { from: 'S7_COORD', to: 'S9_TRANS' },
    { from: 'S8_LINES', to: 'S9_PROOF' },
    { from: 'S6_CLASSIFY', to: 'S9_SIMILAR' },
    { from: 'S8_CONSTR', to: 'S9_PROOF' },

    // ─────────────────────────────────────────────────────────────────────────
    // MEASUREMENT
    // ─────────────────────────────────────────────────────────────────────────
    { from: 'MR_COMPARE', to: 'M1_NONSTAND' },
    { from: 'MR_TIME', to: 'M1_CLOCK' },
    { from: 'M1_NONSTAND', to: 'M2_LENGTH' },
    { from: 'M1_CLOCK', to: 'M2_TIME' },
    { from: 'M2_LENGTH', to: 'M2_MONEY' },
    { from: 'M2_LENGTH', to: 'M3_MASS' },
    { from: 'M2_LENGTH', to: 'M3_CAPACITY' },
    { from: 'M2_TIME', to: 'M3_TIMEADV' },
    { from: 'M3_MASS', to: 'M4_CONVERT' },
    { from: 'M3_CAPACITY', to: 'M4_CONVERT' },
    { from: 'M2_LENGTH', to: 'M4_PERIM' },
    { from: 'M3_TIMEADV', to: 'M4_TIMEELAP' },
    { from: 'M4_PERIM', to: 'M5_AREA' },
    { from: 'M4_TIMEELAP', to: 'M5_TIME24' },
    { from: 'M4_CONVERT', to: 'M5_TEMP' },
    { from: 'M5_AREA', to: 'M6_AREATRI' },
    { from: 'M4_CONVERT', to: 'M6_CONVERT' },
    { from: 'M4_PERIM', to: 'M7_CIRCUM' },
    { from: 'M5_AREA', to: 'M7_AREACIRCLE' },
    { from: 'M5_AREA', to: 'M8_VOLUME' },
    { from: 'M6_AREATRI', to: 'M8_SURFACE' },
    { from: 'M8_VOLUME', to: 'M9_VOLCY' },
    { from: 'M7_AREACIRCLE', to: 'M9_VOLCY' },
    { from: 'M8_SURFACE', to: 'M9_SURFADV' },

    // ─────────────────────────────────────────────────────────────────────────
    // DATA HANDLING
    // ─────────────────────────────────────────────────────────────────────────
    { from: 'DR_SORT', to: 'D1_COLLECT' },
    { from: 'D1_COLLECT', to: 'D2_PICTOGRAPH' },
    { from: 'D2_PICTOGRAPH', to: 'D3_TALLY' },
    { from: 'D3_TALLY', to: 'D4_BARGRAPH' },
    { from: 'D3_TALLY', to: 'D4_QUESTIONS' },
    { from: 'D4_BARGRAPH', to: 'D5_MODE' },
    { from: 'D5_MODE', to: 'D6_MEAN' },
    { from: 'D4_BARGRAPH', to: 'D6_PIE' },
    { from: 'D5_MODE', to: 'D7_PROB' },
    { from: 'D6_MEAN', to: 'D7_SUMMARY' },
    { from: 'D7_SUMMARY', to: 'D8_RANGE' },
    { from: 'D7_PROB', to: 'D8_PROBADV' },
    { from: 'D4_BARGRAPH', to: 'D9_HISTO' },
    { from: 'D8_RANGE', to: 'D9_INTERPRET' },
    { from: 'S7_COORD', to: 'D9_SCATTER' },

    // ─────────────────────────────────────────────────────────────────────────
    // CROSS-DOMAIN CONNECTIONS
    // ─────────────────────────────────────────────────────────────────────────
    { from: 'NR_1TO1', to: 'DR_SORT' },           // Counting for sorting
    { from: 'N4_FRAC', to: 'D6_PIE' },            // Fractions for pie charts
    { from: 'N6_PERCENT', to: 'D6_PIE' },         // Percent for pie charts
    { from: 'N5_DECIMAL', to: 'M4_CONVERT' },     // Decimals for conversions
    { from: 'N3_TIMES', to: 'M5_AREA' },          // Multiplication for area
    { from: 'N4_FRAC', to: 'M6_AREATRI' },        // Fractions for triangle area
    { from: 'P7_LINEAR', to: 'S7_COORD' },        // Linear functions on plane
    { from: 'P7_LINEAR', to: 'D9_SCATTER' },      // Linear for line of best fit
    { from: 'S5_VIEWS', to: 'M8_VOLUME' },        // 3D views for volume
    { from: 'S3_3DPROP', to: 'M8_SURFACE' },      // 3D properties for surface area
    { from: 'N7_INTEGER', to: 'S7_COORD' },       // Integers for all quadrants
    { from: 'N6_RATIO', to: 'S9_SIMILAR' },       // Ratio for similarity
    { from: 'P9_FACTORISE', to: 'N9_FACTOR' }    // Factorising links to numbers
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { atomizedNodes, atomizedEdges };
}
