# Developer notes

## 2016-12-01 LWdb API

From: https://github.com/e1r0nd/LearnWords/issues/58 and wiki page


### LearnWords2016 branch

Branch https://github.com/hhzl/LearnWords/tree/LearnWords2016/js/utils


**Alphabetical**
````
 grep ": function(" LWdb2016.js | sort

destroy: function(){
dumpWords: function(aKeyPrefix) {
get: function(key){
getSettings: function(){
init: function(dbName){
isEmpty: function(key){
isLocalStorageAvailable: function() {
loadWords: function(theWords) {
put: function(key, value){
putSettings: function(theSettingsObj){
remove: function(key){
removeObjects: function(aKeyPrefix){
removeWords: function(){
````

**By categories**

db related
````
destroy: function(){
init: function(dbName){
isEmpty: function(key){
isLocalStorageAvailable: function() {
````

objects (words) related
````
dumpWords: function(aKeyPrefix) {
get: function(key){
loadWords: function(theWords) {
put: function(key, value){
remove: function(key){
removeObjects: function(aKeyPrefix){
removeWords: function(){
````

settings related
````
getSettings: function(){
putSettings: function(theSettingsObj){
````



### Master branch

**Alphabetical**
````
grep ": function(" LWdbMaster.js | sort

destroy: function(){
dumpWords: function(aKeyPrefix) {
getSettings: function(){
init: function(dbName){
isEmpty: function(key){
isLocalStorageAvailable: function() {
loadWords: function(theWords) {
putSettings: function(theSettingsObj){
readItem: function(key){
removeItem: function(key){
removeObjects: function(aKeyPrefix){
removeWords: function(){
storeItem: function(key, value){
````

**By categories**

db related
````
destroy: function(){
init: function(dbName){
isEmpty: function(key){
isLocalStorageAvailable: function() {
````

objects (words) related
````
dumpWords: function(aKeyPrefix) {
loadWords: function(theWords) {
readItem: function(key){
removeWords: function(){
removeItem: function(key){
removeObjects: function(aKeyPrefix){
storeItem: function(key, value){

````

Settings related
````
getSettings: function(){
putSettings: function(theSettingsObj){
````

For differences see https://github.com/e1r0nd/LearnWords/issues/58


### LW2 Master branch

````
grep "function(" LWdb.js | sort
````

24 methods

````
LWdb.prototype.allWords = function() {
LWdb.prototype.destroy = function(anObject) {
LWdb.prototype.getSettings = function() {
LWdb.prototype.getWord = function(anInteger) {
LWdb.prototype.importFrom = function(theWords) {
LWdb.prototype.importFrom = function(theWords) {
LWdb.prototype.incNumberOfWords = function() {
LWdb.prototype.init = function(key) {
LWdb.prototype.invalidateIndex = function() {
LWdb.prototype.isOK = function() {
LWdb.prototype.keysOfAllWords = function() {
LWdb.prototype.loadWords = function(theWords) {
LWdb.prototype.numberOfWords = function() {
LWdb.prototype.open = function() {
LWdb.prototype.persistentStorageOK = function() {
LWdb.prototype.put = function(word) {
LWdb.prototype.putSettings = function(anObject) {
LWdb.prototype.readItem = function(key) {
LWdb.prototype.removeItem = function(key) {
LWdb.prototype.removeObjects = function(aKeyPrefix){
LWdb.prototype.removeWords = function() {
LWdb.prototype.setNumberOfWords = function(n) {
LWdb.prototype.storeItem = function(key, value) {
LWdb.prototype.wdKeyFor = function(anInteger) { 
````


By method categories

DB related

````
LWdb.prototype.destroy = function(anObject) {
LWdb.prototype.init = function(key) {
LWdb.prototype.isOK = function() {
LWdb.prototype.open = function() {
LWdb.prototype.persistentStorageOK = function() {
LWdb.prototype.removeObjects = function(aKeyPrefix){
````

Words related

````
LWdb.prototype.allWords = function() {
LWdb.prototype.getWord = function(anInteger) {
LWdb.prototype.importFrom = function(theWords) {
LWdb.prototype.incNumberOfWords = function() {
LWdb.prototype.invalidateIndex = function() {
LWdb.prototype.keysOfAllWords = function() {
LWdb.prototype.loadWords = function(theWords) {
LWdb.prototype.numberOfWords = function() {
LWdb.prototype.put = function(word) {
LWdb.prototype.removeWords = function() {
LWdb.prototype.setNumberOfWords = function(n) {
LWdb.prototype.wdKeyFor = function(anInteger) { 
````


Settings releated

````
LWdb.prototype.getSettings = function() {
LWdb.prototype.putSettings = function(anObject) {
````


Compatibility with LW1
````
LWdb.prototype.readItem = function(key) {
LWdb.prototype.removeItem = function(key) {
LWdb.prototype.storeItem = function(key, value) {
````
