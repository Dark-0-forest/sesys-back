/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : localhost:3306
 Source Schema         : sesys

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 03/11/2021 17:17:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for evaluate
-- ----------------------------
DROP TABLE IF EXISTS `evaluate`;
CREATE TABLE `evaluate`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '评价id',
  `sup_id` int(11) NOT NULL COMMENT '供应商的id',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评价的内容',
  `score` int(11) NOT NULL COMMENT '评价的分数',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `sup_id_index`(`sup_id`) USING BTREE COMMENT '供应商id索引'
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of evaluate
-- ----------------------------
INSERT INTO `evaluate` VALUES (1, 1, '商品质量较好', 90);
INSERT INTO `evaluate` VALUES (2, 1, '物美价廉', 98);
INSERT INTO `evaluate` VALUES (3, 2, '商品质量差，影响使用', 50);
INSERT INTO `evaluate` VALUES (4, 3, '商品质量一般，可以使用', 55);
INSERT INTO `evaluate` VALUES (5, 3, '体验不是很好', 70);

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '供应商id',
  `code` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '供应商编码',
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '供应商名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES (1, '100100A', '北京xx科技有限公司');
INSERT INTO `supplier` VALUES (2, '100200B', '江西日普xxx材料有限公司');
INSERT INTO `supplier` VALUES (3, '100300C', '中国科技xxx研究院');
INSERT INTO `supplier` VALUES (4, '100400D', '陕西xx科技有限公司');

SET FOREIGN_KEY_CHECKS = 1;
