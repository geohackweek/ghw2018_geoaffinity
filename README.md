# ghw2018_geoaffinity
Problem:
There are no known readily accessible software tool chains to enable geospatial understandings, or "GeoAffinity", between two areas, one familiar and one remote, at the same scale and set of geospatial attributes.
The reason for this is that, firstly, the process involves multiple data sources with differing formats. It requires a lengthy chain of geographic transformations with their resulting edge conditions and constraints.

Secondly, determining a clustering between two ad hoc collections of attributes is non-trivial, involving binary nominal, ordinal and ratio data representations.

The tool could answer queries such as...
  "An island the size of Manhattan..."
  "A country the size of Texas"
  "...A vent area three football

Application Example:
United Nations High Commissioner for Refugees (UNHCR) needed to increase individual donations in the USA and counter ‘donor fatigue’ and compete against the other standard charitable appeal presentations.
A process that would overlay the refugee camp onto the neighborhood of any prospective donor, allowing them to compare their living conditions with the camp – aspects such as terrain, population, vegetation, etc. to develop ‘GeoAffinity’ with the displaced persons in the camps.

It is worth mentioning that this tool is bi-directional, in that it could also be used to illustrate contextual similarities (rather than differences) between two remote sectors.

Sample Data:
There are two types of data we will utilize.
1.) Attribute data. This will likely be raster data accessed through API.
2.) Vector data, which will be used to defined the Areas of Interest (scale, location, possibly resolution.)

Specific Questions/Tasks:
1.) The acquisition of relevant data.
2.) Post-processing the data. Addressing spatial reference systems issues, deriving common analytical SRS for the attribute set. Converting source attribute SRS to common SRS.

Existing Methods:
Similar questions could be answered by using software such as QGIS to compare different sectors. This process, however, isn't generalizable and has a steep learning curve, limiting the accessibility of the tool.

Proposed Methods/Tools:
The usage of the Rodriguez Trasformation in order to standardize
GDal, geoplot, python (some statistical libraries), APIs

Background Reading:
