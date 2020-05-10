/*
 Navicat Premium Data Transfer

 Source Server         : windows本地
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : demo1

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 10/05/2020 22:58:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_emp
-- ----------------------------
DROP TABLE IF EXISTS `tbl_emp`;
CREATE TABLE `tbl_emp`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '员工名称',
  `age` char(3) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gender` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '0 女 ，1男',
  `deptId` int(11) NULL DEFAULT NULL COMMENT '部门id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `age_index`(`age`) USING BTREE,
  INDEX `name_index`(`name`) USING BTREE,
  INDEX `tbl_emp_ibfk_1`(`deptId`) USING BTREE,
  CONSTRAINT `tbl_emp_ibfk_1` FOREIGN KEY (`deptId`) REFERENCES `tbl_dept` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_emp
-- ----------------------------
INSERT INTO `tbl_emp` VALUES (1, '张大', '66', NULL, 1);
INSERT INTO `tbl_emp` VALUES (2, '张二', '50', NULL, 1);
INSERT INTO `tbl_emp` VALUES (3, '张三', '45', NULL, 1);
INSERT INTO `tbl_emp` VALUES (4, '王大', '12', NULL, 2);
INSERT INTO `tbl_emp` VALUES (5, '王二', '56', NULL, 2);
INSERT INTO `tbl_emp` VALUES (6, '孙大', '59', NULL, 3);
INSERT INTO `tbl_emp` VALUES (7, '孙二', '66', NULL, 4);
INSERT INTO `tbl_emp` VALUES (8, '孙三', '77', NULL, 4);
INSERT INTO `tbl_emp` VALUES (11, '胡歌', '40', NULL, 3);
INSERT INTO `tbl_emp` VALUES (12, '赵丽颖', '33', NULL, 4);
INSERT INTO `tbl_emp` VALUES (13, '霍建华', '38', NULL, 2);
INSERT INTO `tbl_emp` VALUES (14, '周杰伦', '44', NULL, 1);
INSERT INTO `tbl_emp` VALUES (15, '孙红雷', '45', NULL, 3);
INSERT INTO `tbl_emp` VALUES (16, '黄磊', '55', NULL, 1);
INSERT INTO `tbl_emp` VALUES (17, '黄渤', '56', NULL, 2);
INSERT INTO `tbl_emp` VALUES (18, '蔡许坤', '66', NULL, 1);
INSERT INTO `tbl_emp` VALUES (19, '吴亦凡', '29', NULL, 2);
INSERT INTO `tbl_emp` VALUES (20, '李现', '23', NULL, 3);

SET FOREIGN_KEY_CHECKS = 1;
